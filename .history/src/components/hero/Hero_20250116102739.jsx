import { useFetch } from "../../context/UseFetch";

export const Hero = () => {
  const { data, loading, error } = useFetch(
    "https://api.mediehuset.net/images/mediesuset/stage1-foto-colourbox.jpg"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log(data);

  return <img src={data} alt/>;
};
