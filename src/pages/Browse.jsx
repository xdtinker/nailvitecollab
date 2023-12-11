import { Heading } from "../components";
import { Collection } from "../components/browse";
import { useState, useEffect } from "react";
import serviceAPI from "../services/_service.js";
const Browse = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const services = await serviceAPI.getAllServices();
      setData(services);
    } catch (error) {
      // Handle error
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Heading />
      <Collection data={data} />
    </>
  );
};

export default Browse;
