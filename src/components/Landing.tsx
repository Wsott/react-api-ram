import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import styles from "../styles/Landing.module.css";

function Landing () {
    return (
        <div className={styles.container}>
            <img src={logo} alt={"Rick & Morty"} />
            <div className={styles.linksContainer}>
                <Link to={"/characters"}><span>Personajes</span></Link>
                <span>Episodios</span>
                <span>Ubicaciones</span>
            </div>
        </div>
    );
}

export default Landing;