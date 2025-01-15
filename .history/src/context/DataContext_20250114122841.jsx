import React, { createContext, useState, useEffect, useContext } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.mediehuset.net");
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
