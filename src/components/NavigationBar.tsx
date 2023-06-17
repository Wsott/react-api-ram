import styles from "../styles/NavigationBar.module.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function NavigationBar() {
    return(
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Link to={"/"}><img src={logo} alt="Logo de la web" /></Link>
            </div>
            <div className={styles.linkContainer}>
                <Link to={"/characters/"}><h3>Personajes</h3></Link>
                <Link to={"/location/"}><h3>Ubicaciones</h3></Link>
                <h3>Episodios</h3>
            </div>
        </div>
    );
}

export default NavigationBar;