import React from 'react';
import './App.css';
import Button from "./Button"

function Tweet({name,message}){
    return(
        <div className="twit">
            <h2>{name}</h2>
            <h2>{message}</h2>
            <Button />
            
            


        </div>
    );

}
export default Tweet;

