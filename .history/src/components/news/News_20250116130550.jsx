import s from "./News.module.scss";

import { useFetch } from "../../utils/UseFetch";

export const News = () => {
  const { data, loading, error } = useFetch({
    url: "https://api.mediehuset.net/mediesuset/images",
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={s.news}>
      <h2>Nyheder</h2>
      <div className={s.grid}>
        
      </div>
    </div>
  );
};
