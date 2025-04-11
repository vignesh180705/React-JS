import React from 'react';
import Child from './Q11_Child';
export default function Q11() {
    const message = "Hello from Parent Component!";
    return <Child msg={message} />;
}