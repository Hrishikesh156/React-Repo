import React,{useState} from 'react';
import Hello from './sayHello';
import Tweet from './tweet';

function App(){
  



  return(
    
    <div className="app">
        
        <h1>Welcome to twitter</h1>

        <Tweet name ="mark1" message="this is mark1"/>
        <Tweet name ="mark2" message="this is mark2"/>
        <Tweet name ="mark3" message="this is mark3"/>
    
    </div>
);

}
// function test(){
//   return(
//     <h3>Testing.....</h3>
//   );
// }

export default App;
// export default test;
