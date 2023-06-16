import styles from "../styles/NavigationSection.module.css";

interface NavigationData {
    previous: boolean;
    currentIndex: number
    next: boolean;
}

function NavigationSection ( {previous, currentIndex, next}: NavigationData ) {
    return (
        <div className={styles.navigationContainer}>
            <button disabled={!previous}>{"<"}</button>
            <p>{currentIndex}</p>
            <button disabled={!next}>{">"}</button>
        </div>
    );
}

export default NavigationSection;