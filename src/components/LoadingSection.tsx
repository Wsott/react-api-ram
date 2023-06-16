import loading from "../assets/loader.svg";
import styles from "../styles/LoadingSection.module.css";

function LoadingSection () {
    return (
        <div className={styles.loadingContainer}>
            <img className={styles.loadingImage} src={loading} alt={"Loading..."} />
            <h1>Loading...</h1>
        </div>
    );
}

export default LoadingSection;