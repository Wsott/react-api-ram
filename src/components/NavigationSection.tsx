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
            {/*  */}
            {
                (previousEnabled)?
                    <button>
                        <Link to={url + (currentIndex - 1)}>{"<"}</Link>
                    </button>
                :
                    <button disabled={true}>
                        <Link to={url + (currentIndex - 1)} className={styles.disabled}>{"<"}</Link>
                    </button>

            }
            
            <p>{currentIndex}</p>
            {/* <button disabled={!next}>{">"}</button> */}

            {
                (nextEnabled)?
                    <button>
                        <Link to={url + (currentIndex + 1)}>{">"}</Link>
                    </button>
                :
                    <button disabled={true}>
                        <Link to={url + (currentIndex + 1)} className={styles.disabled}>{">"}</Link>
                    </button>

            }

            
        </div>
    );
}
{/* <Link to={`/page/${nextPageIndex}`}>Ir a la siguiente página</Link> */}
export default NavigationSection;