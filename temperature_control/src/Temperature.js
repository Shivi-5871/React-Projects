import { useState } from "react";

const Temperature = () => {

    const [temp, setTemp] = useState(0);
    const [tempColor, setTempColor] = useState('cold');

    //hot and cold humari classes hai jismei css lagaya gaya hai

    function increaseTemp(){
        if(temp === 30) return;

        const newTemp = temp + 1;

        if(newTemp >= 15) {
            setTempColor("hot");
        }
        else{
            setTempColor("cold");
        }
        setTemp(newTemp);
    }

    function decreaseTemp(){
        if(temp === 0) return;
        const newTemp = temp - 1;

        if(newTemp < 15) {
            setTempColor("cold")
        } 
        else {
            setTempColor("hot")
        }
        setTemp(newTemp);
    }

    return ( 
        <section>
            <h1>Temperature</h1>
            <div className="container">
            <div className={`temp-container ${tempColor}`}>{temp}°C</div>
            <div className="button-container">
                <button onClick={increaseTemp} className="buttons">+</button>
                <button onClick={decreaseTemp} className="buttons">-</button>
            </div>
            </div>
        </section>
     );
}
 
export default Temperature;