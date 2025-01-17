import s from "./Events.module.scss";

import { useFetch } from "../utils/UseFetch";
import { useEffect, useState } from "react";

export const Events = () => {
  const { data, loading, error } = useFetch({
    url: "https://api.mediehuset.net/mediesuset/events",
  });

  const [filteredData, setFilteredData] = useState([]);
  const [selectedStage, setSelectedStage] = useState(null);

  useEffect(() => {
    if (data?.items) {
      const sortedData = [...data.items].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setFilteredData(sortedData);
    }
  }, [data]);

  const filterByStage = (stage) => {
    setSelectedStage(stage);

    if (stage) {
      const filtered = data.items.filter((event) => event.stage_id === stage);
      setFilteredData(filtered);
    } else {
      const sortedData = [...data.items].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setFilteredData(sortedData);
    }
  };

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
            <button onClick={() => filterByStage(null)}>A-Å</button>
            <button onClick={() => filterByStage("1")}>Rød scene</button>
            <button onClick={() => filterByStage("2")}>Blå scene</button>
            <button onClick={() => filterByStage("3")}>Grøn scene</button>
            <button onClick={() => filterByStage("4")}>Lilla scene</button>
          </li>
        </ul>
      </nav>

      <div className={s.grid}>
        {filteredData.map((event) => (
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
