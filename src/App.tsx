import { useState } from 'react';
import Test from './components/Test.tsx';

const App = () => {
    const [count, setCount] = useState(0);
    // eslint-disable-next-line
    var foo = 4;

    var foo2 = 5; // eslint-disable-line

    /* eslint-disable */
    var bar = 5;

    return (
        <div>
            <h1>Hello World!</h1>
            <div className="count"> {count} </div>
            <button type="button" onClick={() => setCount(count + 1)}>
                click me
            </button>
            <Test />
        </div>
    );
};

export default App;
