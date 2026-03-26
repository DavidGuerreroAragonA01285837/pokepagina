"use client";
import { useState } from "react";

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
                    <div className="horizontal" id="types">{pokemon.types}</div>
                </div>
                <div className="card-back"> 
                    <div className="stat_container" id="stats">
                        <p className="pokestat" id="hp">{pokemon.stats.hp}</p>
                        <p className="pokestat" id="attack">{pokemon.stats.attack}</p>
                        <p className="pokestat" id="defense">{pokemon.stats.defense}</p>
                        <p className="pokestat" id="spe-attack">{pokemon.stats.spe_attack}</p>
                        <p className="pokestat" id="spe-defense">{pokemon.stats.spe_defense}</p>
                        <p className="pokestat" id="speed">{pokemon.stats.speed}</p>
                    </div>
                    <div className ="move_container" id="moves">{pokemon.moves[0].name}</div>
                </div>
            </div>
    );
}