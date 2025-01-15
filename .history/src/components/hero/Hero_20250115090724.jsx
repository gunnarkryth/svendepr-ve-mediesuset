const {data, loading}

export const Hero = () => {
  const { data, loading, error } = useDataContext();
  console.log(data);
  
  return <img src={data?.image} />;
};
