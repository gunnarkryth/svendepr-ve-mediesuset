import { useDataContext } from "../../context/DataContext";

export const Hero = () => {
  const { data, loading, error } = useDataContext();
  return <img src={data?.image} />;
};
