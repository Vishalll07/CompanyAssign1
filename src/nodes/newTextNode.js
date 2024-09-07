import { BaseNode } from "./baseNode";

export const newTextNode = (props) => {
    return (
        <BaseNode 
            id={props.id}
            data={props.data}
            label="Text"
            type="text"
        />        
    );
};