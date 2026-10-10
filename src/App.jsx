import { useState } from "react";
import "./App.css";

function App() {

    // Create counter state
    const [count, setCount] = useState(0);


    // Increment counter
    function increment() {
        setCount(count + 1);
    }


    // Decrement counter
    function decrement() {
        setCount(count - 1);
    }


    // Reset counter
    function reset() {
        setCount(0);
    }


    return (
        <div className="app">

            <h1 className="main-title">
                PIXEL COUNTER
            </h1>

            <div className="counter-card">

                <div className="card-header">
                    ★ COUNT MACHINE ★
                </div>


                {/* Counter Display */}

                <div className="counter-screen">

                    <div className="screen-label">
                        CURRENT SCORE
                    </div>

                    <div className="count">
                        {count}
                    </div>

                </div>


                {/* Buttons */}

                <div className="button-row">

                    <button
                        className="counter-btn"
                        onClick={decrement}
                    >
                        −
                    </button>


                    <button
                        className="reset-btn"
                        onClick={reset}
                    >
                        RESET
                    </button>


                    <button
                        className="counter-btn"
                        onClick={increment}
                    >
                        +
                    </button>

                </div>


                <div className="card-footer">
                    ♥ POWERED BY useState ♥
                </div>

            </div>

        </div>
    );
}

export default App;