import React, { useState, useEffect } from "react";
import { useFetch } from "./2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

const Example = () => {
  const { loading, products, isError } = useFetch(url);
  if (isError) {
    return (
      <div>
        <h2>Error loading page</h2>
      </div>
    );
  } else {
    return (
      <div>
        <h2>{loading ? "loading..." : "data"}</h2>
      </div>
    );
  }
};

export default Example;
