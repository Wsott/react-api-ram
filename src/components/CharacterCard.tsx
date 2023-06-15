interface CharacterData {
    image: string;
    name: string;
    species: string;
}

function CharacterCard ( {image, name, species}: CharacterData) {
    return (
        <div>
            <div>
                <img src={image} alt={"Picture of " + name} />
            </div>
            <div>
                <h3>{name}</h3>
                <h3>{species}</h3>
            </div>
        </div>
    );
}

export default CharacterCard;