import React from "react";
import { cancelGame } from "../store/slices/gameinit";
import { useDispatch } from "react-redux";
const FetchingPage = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>Loading...</p>
      <button
        onClick={() => {
          dispatch(cancelGame());
        }}
      >
        Cancel
      </button>
    </div>
  );
};

export default FetchingPage;
