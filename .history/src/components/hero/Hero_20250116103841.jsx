import { useFetch } from "../../context/UseFetch";

export const Hero = () => {
  const { data, loading, error } = useFetch({
    url: "https://api.mediehuset.net/mediesuset/images",
  });

  if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;

  console.log(data.items);

  return <img src={data.image} alt="Hero image" />;
};
