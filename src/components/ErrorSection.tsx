import { Link } from "react-router-dom";
import styles from "../styles/ErrorSection.module.css";
import baseStyle from "../styles/CharacterSection.module.css";

interface errorSectionData {
    URL: string
}

function ErrorSection ( {URL}: errorSectionData ) {
    return (
        <div className={`${baseStyle.mainSectionNoFooter}`}>
            <div className={styles.errorContainer}>
                <h1 className={styles.title}>Error 404</h1>
                <h2 className={styles.ascii}>¯\_(ツ)_/¯</h2>
                <p>La pagina que estas buscando no existe; es peligroso seguir adelante 
                    <Link to={URL}><b> USA ESTO</b></Link>
                </p>
            </div>
        </div>
    );
}

export default ErrorSection;