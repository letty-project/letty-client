// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

function App() {
    // const [count, setCount] = useState(0);

    return (
        <>
            <div className="rating gap-1">
                <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-circle bg-red-900"
                />
                <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-heart bg-orange-400"
                    checked
                />
                <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-heart bg-yellow-400"
                />
                <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-heart bg-lime-400"
                />
                <input
                    type="radio"
                    name="rating-3"
                    className="mask mask-heart bg-green-400"
                />
            </div>
        </>
    );
}

export default App;
