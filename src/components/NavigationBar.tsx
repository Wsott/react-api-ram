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
                <a href="">Personajes</a>
                <a href="">Ubicaciones</a>
                <a href="">Episodios</a>
            </div>
        </div>
    );
}

export default NavigationBar;