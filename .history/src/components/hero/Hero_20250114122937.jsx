
export const Hero = () => {
    const { data, loading, error } = useDataContext(); // Use context to get data

  return <img src={data?.image}/>;
};
