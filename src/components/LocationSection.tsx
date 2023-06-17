import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BaseTemplate from "./BaseTemplate";
import stlyes from "../styles/CharacterSection.module.css";
import CharacterCard from "./CharacterCard";
import LoadingSection from "./LoadingSection";
import LocationCard from "./LocationCard";

function LocationSection () {
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
        const url = "https://rickandmortyapi.com/api/location?page=" + index;
        try {
            setData(null);
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
            setNext(json.info.next != null);
            setPrevious(json.info.prev != null);
        }
        catch (error) {
            console.log("Error en obtener los datos: " + error);
        }
    }
    
    return (
        <BaseTemplate previous={previous} index={currentIndex} next={next} url={"/locations/"} >
            <div className={stlyes.charactersContainer}>
                {(data) ?
                    data.map((current) => {
                        return (
                            <Link style={linkStyleInline} to={"/location/" + current.id}>
                                <LocationCard
                                    name={current.name}
                                    type={current.type}
                                    dimension={current.dimension}></LocationCard>
                            </Link>
                        );
                    })

                    :
                    <LoadingSection />}
            </div>
        </BaseTemplate>
    );
}

export default LocationSection;