import styles from "../styles/NavigationBar.module.css";

function NavigationBar() {
    return(
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img src="src\assets\logo.png" alt="Logo de la web" />
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