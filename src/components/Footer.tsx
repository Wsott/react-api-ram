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