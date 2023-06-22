import { useEffect, useState } from "react";
import stlyes from "../styles/CharacterSection.module.css";
import CharacterCard from "./CharacterCard";
import { Link, useParams } from "react-router-dom";
import LoadingSection from "../LoadingSection";
import BaseTemplate from "../BaseTemplate";
import ErrorSection from "../ErrorSection";
import CardDisplay from "../CardDisplay";


function CharacterSection () {
    const [data, setData] = useState();
    const [next, setNext] = useState(false);
    const [previous, setPrevious] = useState(false);
    const [error, setError] = useState(false);
    const {index} = useParams();
    const currentIndex: number = Number(index) || 1;

    const linkStyleInline = {
        padding: "0px"
    }

    useEffect(() => {
        loadData(currentIndex);
    }, [currentIndex])

    async function loadData (index: number) {
        const url = "https://rickandmortyapi.com/api/character?page=" + index;
        try {
            setData(null);
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
            setNext(json.info.next != null);
            setPrevious(json.info.prev != null);
        }
        catch (error) {
            setError(true);
            console.log("Error en obtener los datos: " + error);
        }
    }

    return (
        <BaseTemplate 
        previous={previous} 
        index={currentIndex} 
        next={next} 
        url={"/characters/"} 
        selectedOption={"Personajes"} >
            <CardDisplay URL={"https://rickandmortyapi.com/api/character?page="} cardType={"Personaje"} />
            {/* <div className={stlyes.charactersContainer}>
                {(data) ?
                    data.map((current) => {
                        return (
                            <div className={stlyes.gridItem}>
                                <Link style={linkStyleInline} to={"/character/" + current.id}>
                                    <CharacterCard
                                        image={current.image}
                                        name={current.name}
                                        species={current.species}></CharacterCard>
                                </Link>
                            </div>
                        );
                    })
                    :
                        (error)?
                            <ErrorSection URL={"/characters/"}/>
                        :
                            <LoadingSection />
                    }
            </div> */}
        </BaseTemplate>
    );
}

export default CharacterSection;