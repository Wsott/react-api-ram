import footerStyle from "../styles/Footer.module.css";
import NavigationSection from "./NavigationSection";

export interface NavigationData {
    previous: boolean;
    index: number;
    next: boolean;
}

function Footer ( {previous, index, next}: NavigationData) {
    return (
        <footer className={footerStyle.footerContainer}>
            <div className={footerStyle.contentContainer}>
                <NavigationSection
                    previousEnabled={previous}
                    currentIndex={index}
                    nextEnabled={next}
                    url={"/characters/"}></NavigationSection>
            </div>
        </footer>
    );
}

export default Footer;

/*
<footer className={footerStyle.footerContainer}>
    <div className={footerStyle.contentContainer}>
        <div className={styles.navigationContainer}>
            <button className={styles.navigationButton}>{"<<"}</button>
            <p className={styles.navigationIndex}>{currentIndex}</p>
            <button className={styles.navigationButton}>{">>"}</button>
        </div>
    </div>
</footer>
*/