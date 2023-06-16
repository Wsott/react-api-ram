import styles from "../styles/NavigationBar.module.css";
import logo from "../assets/logo.png";

function NavigationBar() {
    return(
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img src={logo} alt="Logo de la web" />
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