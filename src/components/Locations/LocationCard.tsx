import styles from "../../styles/LocationCard.module.css";

interface LocationData {
    name: string;
    type: string;
    dimension: string;
}

function LocationCard ( {name, type, dimension}: LocationData) {
    
    return (
        <div className={styles.card}>
            <div className={styles.descriptionContainer}>
                <h3 className={styles.text}>{name}</h3>
                <h3 className={styles.text}>{type}</h3>
                <h3 className={styles.text}>{(dimension == "unknown")? "Unknown dimension" : dimension}</h3>
            </div>
        </div>
    );
}

export default LocationCard;