import { useEffect, useState } from "react";
import styles from "../styles/EpisodeInfo.module.css";
import BaseTemplate from "./BaseTemplate";
import { Link, useParams } from "react-router-dom";
import LoadingSection from "./LoadingSection";
import CharacterCard from "./CharacterCard";

interface LocationData {
    name: string;
    type: string;
    dimension: string;
    creationDate: string;
}

function LocationInfo (/*{name, type, dimension, creationDate}: LocationData*/) {
    const [data, setData] = useState();
    const [characters, setCharacters] = useState();
    const {id}: any = useParams();

    const regex = /\/(\d+)$/;

    useEffect(() => {
        
        loadData(id);
        // alert("Next: " + next + " || Previous: " + previous);
    }, [])

    async function loadData (id: number) {
        const url = "https://rickandmortyapi.com/api/location/" + id;
        try {
            const response = await fetch(url);
            
            
            const json = await response.json();
            //console.log(json)
            setData(json);

            const charactersUrlList = getCharactersId(json.residents);
            const charactersResponse = await fetch(charactersUrlList);
            const charactersJson = await charactersResponse.json();
            setCharacters(charactersJson);
            console.log(charactersJson);
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
                        <p className={styles.locationTextInfo}><b>Name: </b>{data.name}</p>
                        <p className={styles.locationTextInfo}><b>Type: </b>{data.type}</p>
                        <p className={styles.locationTextInfo}><b>Dimension: </b>{data.dimension}</p>
                        <p className={styles.locationTextInfo}><b>Creation date: </b>{data.created}</p>
                    </div>
                    <div className={styles.mainSection}>
                            <div className={styles.titleSection}>
                                <h3>Residentes de esta ubicacion: </h3>
                            </div>
                            <div className={styles.charactersContainer}>
                                {
                                    (characters.length > 0)?
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
                                    :
                                        <div className={styles.noCharacters}>
                                            <h3 className={styles.locationTextInfo}>No hay personajes que sean de este lugar.</h3>
                                        </div>
                                }
                            </div>
                        </div>
                </>
                :
                <LoadingSection/>
            }
            {/* <div className={styles.containerInfo}>
                {
                    (data)?
                        <>
                            <p><b>Name: </b>{data.name}</p>
                            <p><b>Type: </b>{data.type}</p>
                            <p><b>Dimension: </b>{data.dimension}</p>
                            <p><b>Creation date: </b>{data.created}</p>
                        </>
                    :
                    <LoadingSection/>
                }
                
            </div> */}
        </BaseTemplate>
    );
}

export default LocationInfo;