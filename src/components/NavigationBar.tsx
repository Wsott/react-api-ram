import styles from "../styles/NavigationBar.modules.css";

function NavigationBar() {
    return(
        <div>
            <div>
                <img src="src\assets\logo.png" alt="Logo de la web" />
            </div>
            <div>
                <a href="">Personajes</a>
                <a href="">Ubicaciones</a>
                <a href="">Episodios</a>
            </div>
        </div>
    );
}

export default NavigationBar;