import { useDataContext } from "../../context/DataContext";

export const Hero = () => {
  const { data, loading, error } = useDataContext();
  console.log();
  
  return <img src={data?.image} />;
};
