import styles from "../styles/LocationInfo.module.css";

interface LocationData {
    name: string;
    type: string;
    dimension: string;
    creationDate: string;
}

function LocationInfo ({name, type, dimension, creationDate}: LocationData) {
    return (
        <div className={styles.containerInfo}>
            <p><b>Name: </b>{name}</p>
            <p><b>Type: </b>{type}</p>
            <p><b>Dimension: </b>{dimension}</p>
            <p><b>Creation date: </b>{creationDate}</p>
        </div>
    );
}

export default LocationInfo;