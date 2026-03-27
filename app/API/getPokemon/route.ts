import poke_card from "@/app/components/PokeCards/infoCard";
import fs, { readFileSync } from "fs";

export async function GET(request: Request){

    type Stats = {
        hp: number,
        attack: number,
        defense: number,
        spe_attack: number,
        spe_defense: number,
        speed: number
    }

    type Moves = {
        name: string,
        power: number,
        type: string,
        accuracy: number
    }

    type Pokemon = {
        id: number,
        name: string,
        types: string[],
        stats: Stats,
        image: string,
        moves: Moves[]
    }

    type CacheData = {
        "CacheByID": {
            [pokeID: number]: Pokemon
        },
        "CacheByType": {
            [type: string]: Pokemon[]
        },
        "CacheByName": {
            [pokeName: string]: Pokemon
        },
        "Moves": {
            [name: string]: Moves
        }
    }

    const { searchParams} = new URL (request.url);

    const filterType = searchParams.get("filter");
    const id = Number(searchParams.get("id"));
    const type = String(searchParams.get("type"));
    const name = String(searchParams.get("name"));
    const id_selected = Number(searchParams.get("idSelected"));

    let data: CacheData = {
        "CacheByID": {},
        "CacheByName": {},
        "CacheByType": {},
        "Moves": {}
    };

    data = JSON.parse(fs.readFileSync('./public/data/pokemon_data.json', 'utf-8'));

    if (data != null){
        const pokemon_to_add = [];
        if (filterType == "CacheByIDselected"){
            if (data["CacheByID"][id_selected] != null){
                return Response.json([data["CacheByID"][id_selected]]);
            }
            return Response.json([]);
        }
        else if (filterType == "CacheByName"){
            if (data["CacheByName"][name] != null){
                return Response.json([data["CacheByName"][name]]);
            }
            return Response.json([]);
        }
        else if (filterType == "CacheByType"){
            for (let i = id; i < id + 20; i ++){
                if (i < data["CacheByType"][type].length){
                    pokemon_to_add.push(data["CacheByType"][type][i]);
                }
                else{
                    break
                };
            }
            return Response.json(pokemon_to_add);
        }
        else{
            
            for (let i = id; i < id + 20; i++){
                pokemon_to_add.push(data["CacheByID"][i]);
            }
            return Response.json(pokemon_to_add);
        }
    }

}