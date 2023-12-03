import React from "react";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <Slider />
      <Categories />
    </Layout>
  );
};

export default Home;
