import { Link } from "react-router-dom";
import styles from "../styles/NavigationSection.module.css";

interface NavigationData {
    previousEnabled: boolean;
    currentIndex: number;
    url: string;
    nextEnabled: boolean;
}

function NavigationSection ( {previousEnabled, currentIndex, url, nextEnabled}: NavigationData ) {
    return (
        <div className={styles.navigationContainer}>
            {
                (previousEnabled)?
                    <Link to={url + (currentIndex - 1)}>
                        <button className={styles.navigationButton}>
                            {"<<"}
                        </button>
                    </Link>
                :
                    <Link to={url + (currentIndex - 1)} className={styles.disabled}>
                        <button className={styles.navigationButton} disabled={true}>
                            {"<<"}
                        </button>
                    </Link>

            }
            <p className={styles.navigationIndex}>{currentIndex}</p>
            {
                (nextEnabled)?
                    <Link to={url + (currentIndex + 1)}>
                        <button className={styles.navigationButton}>
                            {">>"}
                        </button>
                    </Link>
                :
                    <Link to={url + (currentIndex + 1)} className={styles.disabled}>
                        <button className={styles.navigationButton} disabled={true}>
                            {">>"}
                        </button>
                    </Link>
            }
        </div>
    );
}

export default NavigationSection;