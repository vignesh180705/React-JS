import React from 'react';
import Child from './Q10_Child';
export default function Q10() {
    const message = "Hello from Parent Component!";
    return <Child msg={message} />;
}