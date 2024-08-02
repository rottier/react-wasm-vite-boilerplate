import { useState, useEffect } from 'react';
import { set_count_update_callback, count } from '../../pkg';

const Counter = () => {
    const [countValue, setCountValue] = useState(0);

    useEffect(() => {
        const onCountUpdate = (newCount: number) => {
            setCountValue(newCount);
        };

        const runWasm = async () => {
            set_count_update_callback(onCountUpdate);
        };

        runWasm();
    }, []);

    const handleIncrement = () => {
        count(1);
    };

    return (
        <div>
            <h1>Count: {countValue}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
};

export default Counter;