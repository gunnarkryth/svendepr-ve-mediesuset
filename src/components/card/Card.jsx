// import { useFetch } from "../../utils/UseFetch";

import { NavLink } from "react-router-dom";

export const Card = ({ id, image, title, text, author }) => {
  // const { data, loading, error } = useFetch({
  //   url: "https://api.mediehuset.net/mediesuset/images",
  // });

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;

  return (
    <figure key={id}>
      <img src={image} alt={`Picture by: ${author}`} />
      <figcaption>
        <h4>{title}</h4>
        {text.split(" ").slice(0, 30).join(" ") +
          (text.split(" ").length > 30 ? "..." : "")}
      </figcaption>
      <button>
        <NavLink to={`/news/${id}`}>Læs mere</NavLink>
      </button>
    </figure>
  );
};
