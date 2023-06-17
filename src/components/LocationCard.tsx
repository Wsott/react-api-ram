import styles from "../styles/CharacterCard.module.css";

interface LocationData {
    name: string;
    type: string;
    dimension: string;
}

function LocationCard ( {name, type, dimension}: LocationData) {
    return (
        <div className={styles.card}>
            <div className={styles.descriptionContainer}>
                <h3>{name}</h3>
                <h3>{type}</h3>
                <h3>{dimension}</h3>
            </div>
        </div>
    );
}

export default LocationCard;