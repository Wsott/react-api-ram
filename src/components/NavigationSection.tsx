interface NavigationData {
    previous: boolean;
    currentIndex: number
    next: boolean;
}

function NavigationSection ( {previous, currentIndex, next}: NavigationData ) {
    return (
        <div>
            <button disabled={!previous}>{"<"}</button>
            <p>{currentIndex}</p>
            <button disabled={!next}>{">"}</button>
        </div>
    );
}

export default NavigationSection;