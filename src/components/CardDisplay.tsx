import { useEffect, useState } from "react";
import stlyes from "../styles/CharacterSection.module.css";
import footerStyle from "../styles/Footer.module.css";

import ErrorSection from "./ErrorSection";
import LoadingSection from "./LoadingSection";
import { Link } from "react-router-dom";
import CharacterCard from "./Characters/CharacterCard";
import NavigationSection from "./NavigationSection";
import baseStyle from "../styles/CharacterSection.module.css";


import navigationStyles from "../styles/NavigationSection.module.css";

function CardDisplay () {
    const [data, setData] = useState();
    const [error, setError] = useState(false);
    const [index, setIndex] = useState(1);
    const [next, setNext] = useState(true);
    const [previous, setPrevious] = useState(true);

    const linkStyleInline = {
        padding: "0px"
    }

    useEffect (() => {
        //alert(index);
        loadData(index);
    }, [index]);

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
        <>
            <div className={`${baseStyle.mainSection} ${stlyes.charactersContainer}`}>
                {(data) ?
                    data.map((current) => {
                        return (
                            <div className={stlyes.gridItem}>
                                <Link style={linkStyleInline} to={"/characters/" + current.id}>
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
            </div>
            <footer className={footerStyle.footerContainer}>
                <div className={footerStyle.contentContainer}>
                    <div className={navigationStyles.navigationContainer}>
                        <button disabled={!previous} className={navigationStyles.navigationButton} onClick={() => setIndex(index - 1)}>{"<<"}</button>
                        <p className={navigationStyles.navigationIndex}>{index}</p>
                        <button disabled={!next} className={navigationStyles.navigationButton} onClick={() => setIndex(index + 1)}>{">>"}</button>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default CardDisplay;