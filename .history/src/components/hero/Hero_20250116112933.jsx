import s from "./Hero.module.scss";

import { useFetch } from "../../utils/UseFetch";

export const Hero = () => {
  const { data, loading, error } = useFetch({
    url: "https://api.mediehuset.net/mediesuset/images",
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // console.log(data.items[3].image);

  return <img cla src={data.items[4].image} alt="Hero image" />;
};
