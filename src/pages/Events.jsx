import s from "./Events.module.scss";

import { useFetch } from "../utils/UseFetch";

export const Events = () => {
  const { data, loading, error } = useFetch({
    url: "https://api.mediehuset.net/mediesuset/events",
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const getStageClass = (stageId) => {
    switch (stageId) {
      case "1":
        return s.stageRed;
      case "2":
        return s.stageBlue;
      case "3":
        return s.stageGreen;
      case "4":
        return s.stagePurple;
      default:
        return "";
    }
  };

  return (
    <section className={s.events}>
      <h2>Line up</h2>
      <nav>
        <ul>
          <li>
            <button>A-Å</button>
            <button>Rød scene</button>
            <button>Blå scene</button>
            <button>Grøn scene</button>
            <button>Lilla scene</button>
          </li>
        </ul>
      </nav>

      <div className={s.grid}>
        {data.items.map((event) => (
          <figure key={event.id}>
            <img src={event.image} alt="" />
            <figcaption className={getStageClass(event.stage_id)}>
              <h3>{event.title}</h3>
              <p>{event.datetime}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};
