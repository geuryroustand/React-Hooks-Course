import React from "react";

import "./effects.css";
import { useCounter } from "./Hooks/useCounter";
import { useFetch } from "./Hooks/useFetch";
export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter();

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}

      <button onClick={increment} className="btn btn-primary">
        Next quote
      </button>
    </div>
  );
};
