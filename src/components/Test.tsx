import React, { useState } from 'react';

function Test() {
    const [test, setTest] = useState('Hello Test');
    return (
        <div>
            {test}
            <button name="button" type="button" onClick={() => setTest('Hello new Test')}>
                Click me
            </button>
        </div>
    );
}

export default Test;
