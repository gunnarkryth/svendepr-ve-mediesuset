import s from "./News.module.scss";

import { useFetch } from "../../utils/UseFetch";

export const News = () => {
  const { data, loading, error } = useFetch({
    url: "https://api.mediehuset.net/mediesuset/images",
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={s.grid}>
      <figure>
        <img src={data.items[1].image} alt="" />
        <figcaption>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
          accusamus ipsam omnis in enim ratione voluptatum consectetur
          laboriosam voluptas ipsum eius error voluptatibus aliquid non,
          similique aspernatur distinctio repellat libero.
        </figcaption>
      </figure>
    </div>
  );
};
