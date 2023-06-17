import NavigationBar from "./NavigationBar";
import stlyes from "../styles/CharacterSection.module.css";
import footerStyle from "../styles/Footer.module.css";
import { ReactNode } from "react";
import NavigationSection from "./NavigationSection";

interface ChildrenComponents {
    children: ReactNode;
    previous: boolean;
    index: number;
    next: boolean;
}

interface NavigationData {
    previous: boolean;
    index: number;
    next: boolean;
}

function BaseTemplate ( {children, previous, index, next}: ChildrenComponents) {
    return (
        <div className={stlyes.container}>
            <NavigationBar></NavigationBar>
            <div className={stlyes.mainSection}>
                {children}
            </div>
            <footer className={footerStyle.footerContainer}>
            <div className={footerStyle.contentContainer}>
                <NavigationSection
                    previousEnabled={previous}
                    currentIndex={index}
                    nextEnabled={next}
                    url={"/characters/"}></NavigationSection>
            </div>
        </footer>
        </div>
    );
}

export default BaseTemplate;