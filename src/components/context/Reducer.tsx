import { useReducer } from "react";

type Action = { type: "increment" } | { type: "decrement" };

const initialState = { count: 0 };

function reducer(state: typeof initialState, action: Action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
      break;
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
      break;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>
    </>
  );
};
