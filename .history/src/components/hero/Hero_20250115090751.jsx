import { useEffect } from "react";

const {data, loading,error} = useEffect('')

export const Hero = () => {
  const { data, loading, error } = useDataContext();
  console.log(data);
  
  return <img src={data?.image} />;
};
