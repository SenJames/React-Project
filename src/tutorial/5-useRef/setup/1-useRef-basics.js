import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refUseRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refUseRef.current.value);
    refUseRef.current.value = "";
  };
  useEffect(() => {
    refUseRef.current.focus();
  });

  return (
    <main>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" ref={refUseRef} />
        <button type="submit" className="btn">
          submit
        </button>
      </form>
    </main>
  );
};

export default UseRefBasics;
