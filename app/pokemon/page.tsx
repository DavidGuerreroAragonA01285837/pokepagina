"use client";
import Header from '../components/Headers/innerHeader';
import Footer from '../components/footer';
import {useState} from "react";
import Pokecard from '../components/PokeCards/infoCard';
import { useEffect } from "react";

export default function poke_pagina(){

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

    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    const [current_id, setCurrentid] = useState(1);
    const [selectedId, setSelectedId] = useState("");
    const [selectedPokemon, setSelectedPokemon] = useState("");
    const [selectedType, setSelectedType] = useState("none");

    function getCacheType(){
        console.log(selectedType);
        if (selectedId != ""){
            return ("CacheByIDselected");
        }
        if (selectedPokemon != ""){
            return ("CacheByName");
        }
        if (selectedType != "none"){
            return ("CacheByType");
        }
        return ("CacheByID");
    }

    async function applyFilters(){
        setCurrentid(1);
        setPokemonList([]);
    }

    useEffect(() => {
        if (current_id === 1) {
            addPokemon();
        }
    }, [current_id]);

    useEffect(() => {
        if (selectedId != ""){
            setSelectedPokemon("");
            setSelectedType("none");
        }
    }, [selectedId]);

    useEffect(() => {
        if (selectedPokemon != ""){
            setSelectedId("");
            setSelectedType("none");
        }
    }, [selectedPokemon]);

    useEffect(() => {
        if (selectedType != "none"){
        setSelectedPokemon("");
        setSelectedId("");}
    }, [selectedType]);

    async function addPokemon(){
        const typeOfCall = getCacheType();
        console.log(typeOfCall);
        const promises = [];
        const res = await fetch(`/API/getPokemon?filter=${typeOfCall}&id=${current_id}&type=${selectedType}&name=${selectedPokemon}&idSelected=${selectedId}`);
        const newPokemon = await res.json();
        setPokemonList(prev => [...prev, ...newPokemon]);
        setCurrentid(current_id + 20);
    }

    return (
        <div className="body_center">
            <div id="header-container" className="header"><Header /></div>
            <h1 className="title">Who is that Pokemon?</h1>
            <div className="pokefilters">
                <input type="text" id="pokeid"  placeholder="Id Pokemon" value={selectedId} onChange={(e) => setSelectedId(e.target.value)}/>
                <input type="text" id="pokename"  placeholder="Name" value={selectedPokemon} onChange={(e)  => setSelectedPokemon(e.target.value)}/>
                <select id="type" className="type-selector" value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                    <option value="none">Select a type</option>
                    <option value="fire">Fire</option>
                    <option value="water">Water</option>
                    <option value="electric">Electric</option>
                    <option value="psychic">Psychic</option>
                    <option value="ground">Ground</option>
                    <option value="grass">Grass</option>
                    <option value="fighting">Fighting</option>
                    <option value="rock">Rock</option>
                    <option value="dark">Dark</option>
                    <option value="bug">Bug</option>
                    <option value="dragon">Dragon</option>
                    <option value="fairy">Fairy</option>
                    <option value="flying">Flying</option>
                    <option value="ghost">Ghost</option>
                    <option value="ice">Ice</option>
                    <option value="normal">Normal</option>
                    <option value="poison">Poison</option>
                    <option value="steel">Steel</option>
                </select>
                <button className="poke_button" onClick={applyFilters}>Apply filters</button>
            </div>
            <div className="poke_scroll" id="poke-container">{pokemonList.map((p,index) => (<Pokecard key={p.id} pokemon={p}/>))}</div>
            <button onClick={addPokemon} className="poke_button">More Pokemon</button>
            <div className="footer" id="footer-container"><Footer /></div>
        </div>
    );
}