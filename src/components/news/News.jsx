import s from "./News.module.scss";

import { useFetch } from "../../utils/UseFetch";
import { Card } from "../card/Card";

export const News = () => {
  const { data, loading, error } = useFetch({
    url: "https://api.mediehuset.net/mediesuset/news",
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={s.news}>
      <h2>Nyheder</h2>
      <div className={s.grid}>
        {data &&
          data.items
            .slice(0, 6)
            .map((item) => (
              <Card
                id={item.id}
                key={item.id}
                image={item.image}
                title={item.title}
                text={item.teaser}
                author={item.author}
              />
            ))}
      </div>
    </div>
  );
};
