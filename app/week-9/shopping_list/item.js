import React from "react";

export default function Item ({foodObj}) {

    let {id, name, quantity, category, onSelect} = foodObj;


    return(
        
        <div className="m-4 bg-green-50 p-2 w-80 border border-black">
            <ul>
                <li onClick={() => onSelect(item)}>{item}</li>
                <li key={id}>{name}</li>
                <li>Buy {quantity} in {category}</li>
            </ul>
        </div>
    );
}