import { useParams } from "react-router-dom";
import { useFetch } from "../utils/UseFetch";

export const NewsDetails = () => {
  const { id } = useParams();

  const { data, loading, error } = useFetch({
    url: `https://api.mediehuset.net/mediesuset/news/${id}`,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const { item } = data;

  return (
    <div>
      <hgroup>
        <h2>{item.title}</h2>
        <h4>
          {item.author} - {item.datetime.slice(0, 10)}
        </h4>
      </hgroup>
      <img src={item.image} alt={item.image} />
      <article>
        <p>{item.content}</p>
      </article>
    </div>
  );
};
