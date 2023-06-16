import { useEffect, useState } from "react";
import stlyes from "../styles/CharacterSection.module.css";
import NavigationBar from "./NavigationBar";
import CharacterCard from "./CharacterCard";


function CharacterSection () {
    const [data, setData] = useState();

    useEffect(() => {
        loadData(1);
    }, [])

    async function loadData (index: number) {
        const url = "https://rickandmortyapi.com/api/character?page=" + index;
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
        }
        catch (error) {
            console.log("Error en obtener los datos: " + error);
        }
    }

    return (
        <div className={stlyes.container}>
            <NavigationBar></NavigationBar>
            <div>
                {
                    (data)?
                        data.map((current) => {
                            return (
                                <CharacterCard 
                                    image={current.image} 
                                    name={current.name} 
                                    species={current.species}></CharacterCard>
                            )
                        })
                    :
                    <h1>{"Cargando..."}</h1>
                }
            </div>
        </div>
        
    );
}

export default CharacterSection;