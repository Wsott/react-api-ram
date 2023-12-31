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
    url: string;
    selectedOption: string;
    requiresFooter: boolean;
}

function BaseTemplate ( {children, previous, index, next, url, selectedOption, requiresFooter = true}: ChildrenComponents) {
    return (
        <div className={stlyes.container}>
            <NavigationBar selectedOption={selectedOption}/>
            {children}
            {/* <div className={`${(requiresFooter)? stlyes.mainSection: stlyes.mainSectionNoFooter}`}>
                {children}
            </div> */}
            {
                (requiresFooter)
                ?
                null
                    // <footer className={footerStyle.footerContainer}>
                    //     <div className={footerStyle.contentContainer}>
                    //         <NavigationSection
                    //             previousEnabled={previous}
                    //             currentIndex={index}
                    //             nextEnabled={next}
                    //             url={url}></NavigationSection>
                    //     </div>
                    // </footer>
                :
                    null
            }
        </div>
    );
}

export default BaseTemplate;