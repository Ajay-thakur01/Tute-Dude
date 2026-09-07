import React from 'react'
import { useEffect, useState } from "react";

function UseFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() =>{
    
    setTimeout(() => {
      
      fetch(url)
      .then((response) =>{
        if(!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      
      .then((data) =>{
        setData(data);
        setLoading(false);
      })
      
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });

    }, 3000);
  },[url]);

  return {
    data,
    loading,
    error
  };
}

export default UseFetch