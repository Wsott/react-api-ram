import { useEffect, useState } from "react";
import stlyes from "../styles/CharacterSection.module.css";
import footerStyle from "../styles/Footer.module.css";
import NavigationBar from "./NavigationBar";
import CharacterCard from "./CharacterCard";
import { Link, useParams } from "react-router-dom";
import NavigationSection from "./NavigationSection";
import LoadingSection from "./LoadingSection";


function CharacterSection () {
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
                                    <Link style={linkStyleInline} to={"/character/" + current.id}>
                                        <CharacterCard 
                                            image={current.image} 
                                            name={current.name} 
                                            species={current.species}></CharacterCard>
                                    </Link>
                                )
                            })

                        :
                        <LoadingSection/>
                    }
                </div>                
            </div>
            <footer className={footerStyle.footerContainer}>
                <div className={footerStyle.contentContainer}>
                    <NavigationSection 
                        previousEnabled={previous}
                        currentIndex={currentIndex}
                        nextEnabled={next} 
                        url={"/characters/"}></NavigationSection>
                </div>
            </footer>
        </div>
        
    );
}

export default CharacterSection;