import React, { useState } from 'react';

const App = () => {
  
    let newtime = new Date().toLocaleTimeString();
  
    const [time, setTime] = useState();

    const updatetime = () => {
        let newtime = new Date().toLocaleTimeString();
        setTime(newtime);
    }
    setInterval(updatetime, 1000);
    return (
        <div>
        <ol>
            <li>{newtime}</li>
        </ol>
     
           

        </div>
    )
}

export default App;

