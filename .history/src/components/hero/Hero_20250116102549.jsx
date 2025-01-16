import { useEffect } from "react";

const { data, loading, error } = useDataContext(
  "https://api.mediehuset.net/images/mediesuset/stage1-foto-colourbox.jpg"
);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error}</p>;

export const Hero = () => {
  const { data, loading, error } = useDataContext();
  console.log(data);

  return <img src={data} />;
};
