"use client";
import { useState } from "react";
import TypePill from "../typePill/typePill";
import MovePill from "../movePill/movePill";

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

export default function poke_card({ pokemon }: { pokemon: Pokemon }){

    const [toggle, setToggle] = useState(false);

    console.log(pokemon);
    return (
        <div className={`poke_card ${toggle ? "flipped" : ""}`} id="flipcard" onClick={() => setToggle(!toggle)}>
                <div className="card-front">
                    <div className="poke_title" id="name">{pokemon.name}</div>
                    <img src={pokemon.image} className="sprite" id="sprite" />
                    <div className="horizontal" id="types">{pokemon.types.map((t, index) => (<TypePill key={`${pokemon.name}type${String(index)}`} pokemonType={t}/>))}</div>
                </div>
                <div className="card-back"> 
                    <div className="stat_container" id="stats">
                        <p className="pokestat" id="hp">HP: {pokemon.stats.hp}</p>
                        <p className="pokestat" id="attack">ATT: {pokemon.stats.attack}</p>
                        <p className="pokestat" id="defense">DEF: {pokemon.stats.defense}</p>
                        <p className="pokestat" id="spe-attack">SPE ATT: {pokemon.stats.spe_attack}</p>
                        <p className="pokestat" id="spe-defense">SPE DEF: {pokemon.stats.spe_defense}</p>
                        <p className="pokestat" id="speed">SPE: {pokemon.stats.speed}</p>
                    </div>
                    <div className ="move_container" id="moves">{pokemon.moves.map((m,index) => (<MovePill key={`${pokemon.name}Move${String(index)}`} pokemonType={m.type} move={m.name}/>))}</div>
                </div>
            </div>
    );
}