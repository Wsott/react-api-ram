import { useEffect, useState } from "react";
import stlyes from "../styles/CharacterSection.module.css";
import NavigationBar from "./NavigationBar";
import CharacterCard from "./CharacterCard";
import { useParams } from "react-router-dom";


function CharacterSection () {
    const [data, setData] = useState();
    const {index} = useParams();
    const currentIndex: number = Number(index) || 1;

    useEffect(() => {
        loadData(currentIndex);
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
            <div className={stlyes.mainSection}>
                <div className={stlyes.charactersContainer}>
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
        </div>
        
    );
}

export default CharacterSection;