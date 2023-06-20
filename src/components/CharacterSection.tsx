import { useEffect, useState } from "react";
import stlyes from "../styles/CharacterSection.module.css";
import footerStyle from "../styles/Footer.module.css";
import NavigationBar from "./NavigationBar";
import CharacterCard from "./CharacterCard";
import { Link, useParams } from "react-router-dom";
import NavigationSection from "./NavigationSection";
import LoadingSection from "./LoadingSection";
import BaseTemplate from "./BaseTemplate";
import Footer from "./Footer";
import ErrorSection from "./ErrorSection";


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
        // alert("Next: " + next + " || Previous: " + previous);
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
            {/* <div className={stlyes.container}> */}
            {/* <NavigationBar></NavigationBar> */}
            {/* <div className={stlyes.mainSection}> */}
            <div className={stlyes.charactersContainer}>
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
            </div>
            {/* </div> */}

            {/* </div> */}
        </BaseTemplate>
    );
}

export default CharacterSection;



        // <footer className={footerStyle.footerContainer}>
        //     <div className={footerStyle.contentContainer}>
        //         <NavigationSection
        //             previousEnabled={previous}
        //             currentIndex={currentIndex}
        //             nextEnabled={next}
        //             url={"/characters/"}></NavigationSection>
        //     </div>
        // </footer></>