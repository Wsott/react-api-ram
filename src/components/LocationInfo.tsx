import { useEffect, useState } from "react";
import styles from "../styles/EpisodeInfo.module.css";
import BaseTemplate from "./BaseTemplate";
import { Link, useParams } from "react-router-dom";
import LoadingSection from "./LoadingSection";
import CharacterCard from "./CharacterCard";
import ErrorSection from "./ErrorSection";

function LocationInfo () {
    const [data, setData] = useState();
    const [characters, setCharacters] = useState();
    const [error, setError] = useState(false);
    const {id}: any = useParams();

    const regex = /\/(\d+)$/;

    useEffect(() => {
        
        loadData(id);
    }, [])

    async function loadData (id: number) {
        const url = "https://rickandmortyapi.com/api/location/" + id;
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);

            const charactersUrlList = getCharactersId(json.residents);
            const charactersResponse = await fetch(charactersUrlList);
            const charactersJson = await charactersResponse.json();
            setCharacters(charactersJson);
        }
        catch (error) {
            setError(true);
            console.log("Error en obtener los datos: " + error);
        }
    }

    function getCharactersId (listOfCharacters) {
        let url = "https://rickandmortyapi.com/api/character/";

        listOfCharacters.forEach(actual => {
            url += (actual.match(regex)[1] + ",");
        });

        return url;
    }

    return (
        <BaseTemplate requiresFooter={false}>
            {
                (data && characters)?
                <>
                    <div className={styles.containerInfo}>
                        <p className={styles.locationTextInfo}><b>Nombre: </b>{data.name}</p>
                        <p className={styles.locationTextInfo}><b>Tipo: </b>{data.type}</p>
                        <p className={styles.locationTextInfo}><b>Dimension: </b>{data.dimension}</p>
                        <p className={styles.locationTextInfo}><b>Fecha de creacion: </b>{data.created}</p>
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
                                                <div className={styles.gridItem}>
                                                    <Link to={"/character/" + current.id}>
                                                        <CharacterCard
                                                            image={current.image}
                                                            name={current.name}
                                                            species={current.species}></CharacterCard>
                                                    </Link>
                                                </div>
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
                    (error)?
                        <ErrorSection URL={"/locations/"}/>
                    :
                        <LoadingSection/>
            }
        </BaseTemplate>
    );
}

export default LocationInfo;