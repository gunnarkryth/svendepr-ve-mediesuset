import { useFetch } from "../../context/UseFetch";

export const Hero = () => {
  const { data, loading, error } = useFetch(
    "https://api.mediehuset.net/mediesuset/images"
  );

  if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;

  console.log(`https://api.mediehuset.net/mediesuset/images`);

  return <img src={data} alt="Hero image"/>;
};
