import { useEffect, useState } from "react";
import styles from "../styles/LocationInfo.module.css";
import BaseTemplate from "./BaseTemplate";
import { useParams } from "react-router-dom";
import LoadingSection from "./LoadingSection";

function EpisodeInfo () {
    const [data, setData] = useState();
    const {id}: any = useParams();

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
        }
        catch (error) {
            console.log("Error en obtener los datos: " + error);
        }
    }

    return (
        <BaseTemplate previous={false} index={0} next={false} url={""}>
            <div className={styles.containerInfo}>
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
                
            </div>
        </BaseTemplate>
    );
}

export default EpisodeInfo;