import { useEffect, useState } from "react";
import styles from "../styles/EpisodeInfo.module.css";
import BaseTemplate from "./BaseTemplate";
import { Link, useParams } from "react-router-dom";
import LoadingSection from "./LoadingSection";
import CharacterCard from "./CharacterCard";

function EpisodeInfo () {
    const [data, setData] = useState();
    const [characters, setCharacters] = useState();
    const {id}: any = useParams();

    const regex = /\/(\d+)$/;

    useEffect(() => {
        
        loadData(id);
        // alert("Next: " + next + " || Previous: " + previous);
    }, [])

    async function loadData (id: number) {
        const url = "https://rickandmortyapi.com/api/episode/" + id;
        try {
            const response = await fetch(url);
            
            
            const json = await response.json();
            console.log(json)
            setData(json);
            
            const charactersUrlList = getCharactersId(json.characters);
            const charactersResponse = await fetch(charactersUrlList);
            const charactersJson = await charactersResponse.json();
            setCharacters(charactersJson);
            console.log(charactersJson);
            //console.log(charactersJson);
        }
        catch (error) {
            console.log("Error en obtener los datos: " + error);
        }
    }

    function getCharactersId (listOfCharacters) {
        let url = "https://rickandmortyapi.com/api/character/";

        listOfCharacters.forEach(actual => {
            url += (actual.match(regex)[1] + ",");
        });

        return url;
        //alert(url);
    }

    return (
        <BaseTemplate requiresFooter={false}>
            {
                (data && characters)?
                    <>
                        <div className={styles.containerInfo}>
                            <p className={styles.episodTextInfo}><b>Episode: </b>{data.episode}</p>
                            <p className={styles.episodTextInfo}><b>Air date: </b>{data.air_date}</p>
                            <p className={styles.episodTextInfo}><b>Name: </b>{data.name}</p>
                        </div>
                        <div className={styles.mainSection}>
                            <div className={styles.titleSection}>
                                <h3>Personajes que aparecen en este episodio: </h3>
                            </div>
                            <div className={styles.charactersContainer}>
                                {
                                    characters.map((current) => {
                                        return (
                                            <Link to={"/character/" + current.id}>
                                                <CharacterCard
                                                    image={current.image}
                                                    name={current.name}
                                                    species={current.species}></CharacterCard>
                                            </Link>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </>
                :
                    <LoadingSection></LoadingSection>
            }

            {/* <div className={styles.containerInfo}>
                {
                    (data)?
                        <>
                            <p><b>Episode: </b>{data.episode}</p>
                            <p><b>Air date: </b>{data.air_date}</p>
                            <p><b>Name: </b>{data.name}</p>
                        </>
                    :
                    <LoadingSection/>
                }
                
            </div> */}
        </BaseTemplate>
    );
}

export default EpisodeInfo;