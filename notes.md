## Use State details

- `<button onClick={() => setCounter(counter + 1)}> plus </button>`
- `<button onClick={setCounter(counter + 1)}>` ERROR
- The reason why this second example doesn't work is that setCounter is not a function but a function call expression
  which is not valid in the context of the button onClick handler.

- Do not call useState or useEffect inside a loop or any conditional expression, can only be called inside the
  function body that defines a React component
- 
