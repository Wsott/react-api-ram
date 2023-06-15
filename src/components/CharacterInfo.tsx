interface CharacterFullData {
    id: number;
    image: string;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: string;
}

function CharacterInfo ( {id, image, name, status, species, type, gender, origin}: CharacterFullData) {
    return (
        <div>
            <div>
                <img src={image} alt={"Image of " + name} />
            </div>
            <div>
                <span><b>Id: </b>{id}</span>
                <span><b>Name: </b>{name}</span>
                <span><b>Status: </b>{status}</span>
                <span><b>Species: </b>{species}</span>
                <span><b>Type: </b>{type}</span>
                <span><b>Gender: </b>{gender}</span>
                <span><b>Origin: </b>{origin}</span>
            </div>
        </div>
    );
}

export default CharacterInfo;