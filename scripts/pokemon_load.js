const fs = require("fs");

let pokemonCache = {};
let pokemonbyNameCache = {};
let pokemonbyTypeCache = {
    normal: [],
    fire: [],
    water: [],
    electric: [],
    grass: [],
    ice: [],
    fighting: [],
    poison: [],
    ground: [],
    flying: [],
    psychic: [],
    bug: [],
    rock: [],
    ghost: [],
    dragon: [],
    dark: [],
    steel: [],
    fairy: []
};
let moveInfoCache = {};

// Funcion que precarga la informacion de los pokemon al inicializar el servidor de node para evitar tiempos
// de carga prolongados a la hora de aplicar filtros y los guarda en caches
async function preloadPokemon(){
    for (let i = 1; i < 1025; i++){
        let pokedata = {};
        try {
            const response = await fetch( `https://pokeapi.co/api/v2/pokemon/${i}`);
            if (!response.ok){
                throw new Error("Request failed");
            }

            pokedata = await response.json();
        } catch (error) {
            console.error("Error: ", error.message);
            continue;
        }
        let types = [pokedata.types[0].type.name];
        if (pokedata.types.length == 2){
            types.push(pokedata.types[1].type.name);
        }
        const stats = {
            hp: pokedata.stats[0].base_stat,
            attack: pokedata.stats[1].base_stat,
            defense: pokedata.stats[2].base_stat,
            spe_attack: pokedata.stats[3].base_stat,
            spe_defense: pokedata.stats[4].base_stat,
            speed: pokedata.stats[5].base_stat
        }
        
        const moves = [];
        const usedIndexes = new Set();

        while (moves.length < 4 && usedIndexes.size < pokedata.moves.length) {
            const randomIndex = Math.floor(Math.random() * pokedata.moves.length);

            if (!usedIndexes.has(randomIndex)) {
                usedIndexes.add(randomIndex);

                const moveName = pokedata.moves[randomIndex].move.name;
                const move = moveInfoCache[moveName];

                if (move) { // only push if move exists in cache
                    moves.push(move);
                }
            }
        }
        const pokemon = {
            id: pokedata.id,
            name: pokedata.name,
            types: types,
            stats: stats,
            image: pokedata.sprites.front_default,
            moves: moves
        }
        pokemonCache[pokemon.id] = pokemon;
        pokemonbyNameCache[pokemon.name] = pokemon;
        pokemonbyTypeCache[pokemon.types[0]].push(pokemon);
        if (pokemon.types.length == 2){
            pokemonbyTypeCache[pokemon.types[1]].push(pokemon);
        }
    }
    console.log("Pokemon pre-loaded");
}

// Funcion que precarga la informacion de los movimientos y los guarda en los caches
async function preloadMoves(){
    let movedata = {};
    for (let i = 1; i < 248; i++){
        
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/move/${i}/`);
            if (!response.ok){
                throw new Error("Request failed");
            }
            movedata = await response.json();
        }
        catch (error) {
            console.error("Error: ", error.message);
            continue;
        }
        const moveinfo = {
            name: movedata.name,
            power: movedata.power,
            type: movedata.type.name,
            accuracy: movedata.accuracy
        };
        moveInfoCache[movedata.name] = moveinfo;
    }
    console.log("Moves pre-loaded");
}

// Funcion de inicializacion que ejecuta las funciones de precarga de movimientos para los pokemon y movimientos
// en orden para evitar errores de elementos no cargados.
async function init(){
    await preloadMoves();
    await preloadPokemon();
    let dataCache = {
        "CacheByID": pokemonCache,
        "CacheByType": pokemonbyTypeCache,
        "CacheByName": pokemonbyNameCache,
        "Moves": moveInfoCache
    }
    fs.writeFileSync('./public/data/pokemon_data.json', JSON.stringify(dataCache,null, 2));
}

// Llamado de funcion de inicializacion
init();