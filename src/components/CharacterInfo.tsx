import styles from "../styles/CharacterInfo.module.css";

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

function CharacterInfo ( {id, image, name, status, species, type, gender, origin}: CharacterFullData) {
    return (
        <div className={styles.characterInfoContainer}>
            <div className={styles.imgContainer}>
                <img src={image} alt={"Image of " + name} />
            </div>
            <div className={styles.infoContainer}>
                <p><b>Id: </b>{id}</p>
                <p><b>Name: </b>{name}</p>
                <p><b>Status: </b>{status}</p>
                <p><b>Species: </b>{species}</p>
                <p><b>Type: </b>{type}</p>
                <p><b>Gender: </b>{gender}</p>
                <p><b>Origin: </b>{origin}</p>
            </div>
        </div>
    );
}

export default CharacterInfo;