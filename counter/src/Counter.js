import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    function increment(){
        setCount(count + 1);
    }

    function decrement(){
        setCount(count - 1);
    }

    function handleReset(){
        setCount(0);
    }

    return ( 
        <section className="counting">

            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>

        </section>
     );
}
 
export default Counter;