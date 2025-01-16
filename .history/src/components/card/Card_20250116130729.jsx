import { useFetch } from "../../utils/UseFetch";

export const Card = () => {
  const { data, loading, error } = useFetch({
    url: "https://api.mediehuset.net/mediesuset/images",
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return (
    <figure>
      <img src={data.items[17].image} alt="" />
      <figcaption>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
        accusamus ipsam omnis in enim ratione voluptatum consectetur laboriosam
        voluptas ipsum eius error voluptatibus aliquid non, similique aspernatur
        distinctio repellat libero.
      </figcaption>
    </figure>
  );
};
