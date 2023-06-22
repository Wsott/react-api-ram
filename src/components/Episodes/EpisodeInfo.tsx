import { useEffect, useState } from "react";
import styles from "../../styles/EpisodeInfo.module.css";
import BaseTemplate from "../BaseTemplate";
import { Link, useParams } from "react-router-dom";
import LoadingSection from "../LoadingSection";
import CharacterCard from "../Characters/CharacterCard";
import ErrorSection from "../ErrorSection";
import baseStyle from "../../styles/CharacterSection.module.css";

function EpisodeInfo () {
    const [data, setData] = useState();
    const [characters, setCharacters] = useState();
    const [error, setError] = useState(false);
    const {id}: any = useParams();

    const regex = /\/(\d+)$/;

    useEffect(() => {
        loadData(id);
    }, [])

    async function loadData (id: number) {
        const url = "https://rickandmortyapi.com/api/episode/" + id;
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
            
            const charactersUrlList = getCharactersId(json.characters);
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
                <div className={`${baseStyle.mainSectionNoFooter}`}>
                    {
                    (data && characters)?
                        <>
                            <div className={styles.containerInfo}>
                                <p className={styles.episodTextInfo}><b>Episodio: </b>{data.episode}</p>
                                <p className={styles.episodTextInfo}><b>Fecha de emision: </b>{data.air_date}</p>
                                <p className={styles.episodTextInfo}><b>Nombre: </b>{data.name}</p>
                            </div>
                            <div className={styles.mainSection}>
                                <div className={styles.titleSection}>
                                    <h3>Personajes que aparecen en este episodio: </h3>
                                </div>
                                <div className={styles.charactersContainer}>
                                    {
                                        characters.map((current) => {
                                            return (
                                                <div className={styles.gridItem}>
                                                    <Link to={"/characters/" + current.id}>
                                                        <CharacterCard
                                                            image={current.image}
                                                            name={current.name}
                                                            species={current.species}></CharacterCard>
                                                    </Link>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </>
                    :
                        (error)?
                            <ErrorSection URL={"/episodes/"}/>
                        :
                            <LoadingSection/>
                    }
                </div>
            }
        </BaseTemplate>
    );
}

export default EpisodeInfo;