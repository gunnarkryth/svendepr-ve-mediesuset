import { useEffect } from "react";

const { data, loading, error } = useEffect(
  "https://api.mediehuset.net/images/mediesuset/stage1-foto-colourbox.jpg"
);

export const Hero = () => {
  const { data, loading, error } = useDataContext();
  console.log(data);
  
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return <img src={data} />;
};
