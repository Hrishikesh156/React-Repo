import React, {useState} from "react";

function Button(){
    const [count,setCount] = useState(0);
    const increment = () =>{
        setCount(count+1);
    }

    return(
        <div className="btn">
           
            <h3>{count}</h3>
            <button onClick={increment}>Like</button>
        </div>


    );
}
export default Button;