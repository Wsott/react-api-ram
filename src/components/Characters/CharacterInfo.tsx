import { Link, useParams } from "react-router-dom";
import styles from "../../styles/CharacterInfo.module.css";
import { useState, useEffect } from "react";
import LoadingSection from "../LoadingSection";
import BaseTemplate from "../BaseTemplate";
import EpisodeCard from "../EpisodeCard";
import ErrorSection from "../ErrorSection";
import baseStyle from "../../styles/CharacterSection.module.css";
import cardDisplayStyle from "../../styles/CharacterSection.module.css";

function CharacterInfo () {
    const [data, setData] = useState();
    const [location, setLocation] = useState();
    const [episodes, setEpisodes] = useState();
    const [error, setError] = useState(false);
    const {id}: any = useParams();

    const regex = /\/(\d+)$/;
    


    useEffect(() => {
        
        loadData(id);
    }, [])

    async function loadData (id: number) {
        const url = "https://rickandmortyapi.com/api/character/" + id;
        try {
            const response = await fetch(url);
            
            
            const json = await response.json();
            setData(json);
            const match = json.location.url.match(regex);
            setLocation(match[1]);

            const episodesUrlList = getEpisodesId(json.episode);
            const episodesResponse = await fetch(episodesUrlList);
            const episodesJson = await episodesResponse.json();
            setEpisodes(episodesJson);
        }
        catch (error) {
            setError(true);
            console.log("Error en obtener los datos: " + error);
        }
    }

    function getEpisodesId (listOfEpisodes) {
        let url = "https://rickandmortyapi.com/api/episode/";

        listOfEpisodes.forEach(actual => {
            url += (actual.match(regex)[1] + ",");
        });

        return url;
    }

    return (
        <BaseTemplate requiresFooter={false}>
                {
                    <div className={`${baseStyle.mainSection}`}>
                        {
                        (data && episodes)?
                            <>
                                <div className={styles.characterInfoContainer}>
                                    <div className={styles.imgContainer}>
                                        <img className={styles.characterInfoImage} src={data.image} alt={"Image of " + data.name} />
                                    </div>
                                    <div className={styles.infoContainer}>
                                        <p className={styles.characterTextInfo}><b>Id: </b>{id}</p>
                                        <p className={styles.characterTextInfo}><b>Nombre: </b>{data.name}</p>
                                        <p className={styles.characterTextInfo}><b>Estado: </b>{data.status}</p>
                                        <p className={styles.characterTextInfo}><b>Especie: </b>{data.species}</p>
                                        <p className={styles.characterTextInfo}><b>Tipo: </b>{(data.type != "")? data.type: " ¯\\_(ツ)_/¯"}</p>
                                        <p className={styles.characterTextInfo}><b>Genero: </b>{data.gender}</p>
                                        <p className={styles.characterTextInfo}>
                                            <b>Origen: </b>
                                                <Link to={"/location/" + location}>{data.origin.name}</Link>
                                        </p>
                                    </div>
                                </div>

                                <div className={styles.mainSection}>
                                    <div className={styles.titleSection}>
                                        <h3>Episodios en donde aparece: </h3>
                                    </div>
                                    <div className={styles.charactersContainer}>
                                    {
                                        (episodes.length > 0)?
                                            episodes.map((current) => {
                                                return (
                                                    <div className={styles.gridItem}>
                                                        <Link to={"/episode/" + current.id}>
                                                            <EpisodeCard 
                                                            name={current.name} 
                                                            episode={current.episode}></EpisodeCard>
                                                        </Link>
                                                    </div>
                                                );
                                            })
                                        :
                                            <div className={styles.noCharacters}>
                                                <h3 className={styles.locationTextInfo}>Este personaje no aparece en ningun episodio.</h3>
                                            </div>
                                        }
                                    </div>
                                </div>
                                
                            </>
                            :
                                (error)?
                                    <ErrorSection URL={"/characters/"}/>
                                :
                                    <LoadingSection/>
                    }
                    </div>
                }          
        </BaseTemplate>
        
    );
}

export default CharacterInfo;