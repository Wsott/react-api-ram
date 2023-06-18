import styles from "../styles/CharacterCard.module.css";

interface CharacterData {
    image: string;
    name: string;
    species: string;
}

function CharacterCard ( {image, name, species}: CharacterData) {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img className={styles.cardImage} src={image} alt={"Picture of " + name} />
            </div>
            <div className={styles.descriptionContainer}>
                <h3>{name}</h3>
                <h3 className={styles.species}>{species}</h3>
            </div>
        </div>
    );
}

export default CharacterCard;