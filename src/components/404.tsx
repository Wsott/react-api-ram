import BaseTemplate from "./BaseTemplate";
import ErrorSection from "./ErrorSection";

function InvalidURL () {
    return (
        <BaseTemplate requiresFooter={false}>
            <ErrorSection URL={"/"}/>
        </BaseTemplate>
    );
}

export default InvalidURL;