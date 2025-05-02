import React, { useState, useEffect } from "react";
import './CounterStyle.css'

function Counter() {
    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(prev => prev + 1);
    };

    useEffect(() => {
        console.log("Component mounted");
    }, []);

    useEffect(() => {
        console.log("Count changed");
        document.title = `Count: ${count}`;
    }, [count]);

    return (
        <div className="Counter">
            <h3>Counter: {count}</h3>
            <button className="btn" onClick={handleCount}>Increment</button>
        </div>
    );
}

export default Counter;
