import { useParams } from "react-router-dom";
import styles from "../styles/CharacterInfo.module.css";
import { useState, useEffect } from "react";
import LoadingSection from "./LoadingSection";

interface CharacterFullData {
    id: number;
    image: string;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: string;
}

function CharacterInfo ( /*{id, image, name, status, species, type, gender, origin}: CharacterFullData*/) {
    const [data, setData] = useState();
    const {id}: any = useParams();

    useEffect(() => {
        
        loadData(id);
        // alert("Next: " + next + " || Previous: " + previous);
    }, [])

    async function loadData (id: number) {
        const url = "https://rickandmortyapi.com/api/character/" + id;
        try {
            const response = await fetch(url);
            
            
            const json = await response.json();
            setData(json);
            console.log(json)
        }
        catch (error) {
            console.log("Error en obtener los datos: " + error);
        }
    }

    return (
        <div className={styles.characterInfoContainer}>
            {
                (data)?
                    <>
                        <div className={styles.imgContainer}>
                            <img src={data.image} alt={"Image of " + data.name} />
                        </div>
                        <div className={styles.infoContainer}>
                            <p><b>Id: </b>{id}</p>
                            <p><b>Name: </b>{data.name}</p>
                            <p><b>Status: </b>{data.status}</p>
                            <p><b>Species: </b>{data.species}</p>
                            <p><b>Type: </b>{(data.type != "")? data.type: " ¯\\_(ツ)_/¯"}</p>
                            <p><b>Gender: </b>{data.gender}</p>
                            <p><b>Origin: </b>{data.origin.name}</p>
                        </div>
                    </>
                    :
                    <LoadingSection/>
            }
            
        </div>
    );
}

export default CharacterInfo;