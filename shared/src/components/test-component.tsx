import React from "react";

interface TestComponentInterface {
    name: string;
    age: number;
}

const TestComponent: React.FC<TestComponentInterface> = ({name, age}) => {
    return <div>{name}, {age}</div>;
}

export default TestComponent;