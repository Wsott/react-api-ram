import { Link } from "react-router-dom";
import styles from "../styles/ErrorSection.module.css";

function ErrorSection ( returnURL: string ) {
    return (
        <div className={styles.errorContainer}>
            {/* <img className={styles.loadingImage} src={loading} alt={"Loading..."} /> */}
            <h1 className={styles.title}>Error 404</h1>
            <h2 className={styles.ascii}>¯\_(ツ)_/¯</h2>
            <p>La pagina que estas buscando no existe; es peligroso seguir adelante 
                <Link to={returnURL}> toma esto</Link>
            </p>
        </div>
    );
}

export default ErrorSection;