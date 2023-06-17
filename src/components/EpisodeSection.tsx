import { useEffect, useState } from "react";
import BaseTemplate from "./BaseTemplate";
import { useParams } from "react-router-dom";

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
        }
        catch (error) {
            console.log("Error en obtener los datos: " + error);
        }
    }

    return (
        <BaseTemplate previous={false} index={0} next={false} url={""}>
            <></>
        </BaseTemplate>
    )
}

export default EpisodeSection;