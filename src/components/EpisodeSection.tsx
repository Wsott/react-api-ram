import { useEffect, useState } from "react";
import BaseTemplate from "./BaseTemplate";
import { Link, useParams } from "react-router-dom";
import stlyes from "../styles/CharacterSection.module.css";
import EpisodeCard from "./EpisodeCard";
import LoadingSection from "./LoadingSection";

function EpisodeSection () {
    const [data, setData] = useState();
    const [next, setNext] = useState(false);
    const [previous, setPrevious] = useState(false);
    const {index} = useParams();
    const currentIndex: number = Number(index) || 1;

    const linkStyleInline = {
        padding: "0px"
    }

    useEffect(() => {
        loadData(currentIndex);
        // alert("Next: " + next + " || Previous: " + previous);
    }, [currentIndex])

    async function loadData (index: number) {
        const url = "https://rickandmortyapi.com/api/episode?page=" + index;
        try {
            setData(null);
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
            setNext(json.info.next != null);
            setPrevious(json.info.prev != null);
            console.log(json.results[0].name);
        }
        catch (error) {
            console.log("Error en obtener los datos: " + error);
        }
    }

    return (
        <BaseTemplate previous={previous} index={currentIndex} next={next} url={"/episodes/"}>
            <div className={stlyes.charactersContainer}>
                {(data) ?
                    data.map((current) => {
                        return (
                            <Link style={linkStyleInline} to={"/episode/" + current.id}>
                                <EpisodeCard 
                                    name={current.name} 
                                    episode={current.episode}></EpisodeCard>
                            </Link>
                        );
                    })

                    :
                    <LoadingSection />}
            </div>
        </BaseTemplate>
    )
}

export default EpisodeSection;