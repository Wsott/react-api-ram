import { useEffect, useState } from "react";
import styles from "../styles/LocationInfo.module.css";
import BaseTemplate from "./BaseTemplate";
import { useParams } from "react-router-dom";
import LoadingSection from "./LoadingSection";

interface LocationData {
    name: string;
    type: string;
    dimension: string;
    creationDate: string;
}

function LocationInfo (/*{name, type, dimension, creationDate}: LocationData*/) {
    const [data, setData] = useState();
    const {id}: any = useParams();

    useEffect(() => {
        
        loadData(id);
        // alert("Next: " + next + " || Previous: " + previous);
    }, [])

    async function loadData (id: number) {
        const url = "https://rickandmortyapi.com/api/location/" + id;
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
        <BaseTemplate previous={false} index={0} next={false}>
            <div className={styles.containerInfo}>
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
                
            </div>
        </BaseTemplate>
    );
}

export default LocationInfo;