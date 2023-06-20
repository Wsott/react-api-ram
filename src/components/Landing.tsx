import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import styles from "../styles/Landing.module.css";

function Landing () {
    return (
        <div className={styles.container}>
            <img className={styles.mainLogo} src={logo} alt={"Rick & Morty"} />
            <div className={styles.linksContainer}>
                <Link to={"/characters"}><span className={styles.mainLinks}>Personajes</span></Link>
                <Link to={"/locations/"}><span className={styles.mainLinks}>Ubicaciones</span></Link>
                <Link to={"/episodes/"}><span className={styles.mainLinks}>Episodios</span></Link>
            </div>
        </div>
    );
}

export default Landing;