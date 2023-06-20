import styles from "../styles/NavigationBar.module.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

interface NavigationBarData {
    selectedOption: string;
}

function NavigationBar( {selectedOption}: NavigationBarData ) {
    return(
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Link to={"/"}><img className={styles.navigationBarImage} src={logo} alt="Logo de la web" /></Link>
            </div>
            <div className={styles.linkContainer}>
                <Link to={"/characters/"}>
                    <h3 className={
                        `${styles.link} ${(selectedOption == "Personajes")? styles.selected : ""}`
                    }>Personajes</h3>
                    </Link>
                <Link to={"/locations/"}>
                    <h3 className={
                        `${styles.link} ${(selectedOption == "Ubicaciones")? styles.selected : ""}`
                    }>Ubicaciones</h3>
                    </Link>
                <Link to={"/episodes/"}>
                    <h3 className={
                        `${styles.link} ${(selectedOption == "Episodios")? styles.selected : ""}`
                    }>Episodios</h3>
                    </Link>
            </div>
        </div>
    );
}

export default NavigationBar;