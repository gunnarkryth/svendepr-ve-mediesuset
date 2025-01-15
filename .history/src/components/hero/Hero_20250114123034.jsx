import { useDataContext } from "../../context/DataContext";

export const Hero = () => {
  const { data, loading, error } = useDataContext();
  console.log(data?.image);
  
  return <img src={data?.image} />;
};
