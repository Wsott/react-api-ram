import styles from "../styles/LocationCard.module.css";

interface EpisodeData {
    name: string;
    episode: string;
}

function EpisodeCard ( {name, episode}: EpisodeData) {
    
    return (
        <div className={styles.card}>
            <div className={styles.descriptionContainer}>
                <h3 className={styles.text}>{episode}</h3>
                <h3 className={styles.text}>{name}</h3>
            </div>
        </div>
    );
}

export default EpisodeCard;