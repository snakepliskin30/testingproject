import React, { useState } from "react";

export interface CounterProps {
  description: string;
  defaultCount: number;
}

export function Counter({ description, defaultCount }: CounterProps) {
  const [count, setCount] = useState(defaultCount);
  const [incrementBy, setIncrementBy] = useState(1);

  return (
    <div>
      <h2>
        DESC: {description} - DC: {defaultCount}
      </h2>
      <label>
        Increment By:
        <input
          value={incrementBy}
          onChange={(evt) => {
            setIncrementBy(parseInt(evt.target.value) || 1);
          }}
          type="number"
        />
      </label>
      <button onClick={() => setCount(count - incrementBy)}>-</button>
      Current Count: {count}
      <button onClick={() => setCount(count + incrementBy)}>+</button>
    </div>
  );
}
