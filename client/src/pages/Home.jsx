import React from "react";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Layout from "../components/Layout";
import Products from "../components/Products";

const Home = () => {
  return (
    <Layout>
      <Slider />
      <Categories />
      <Products />
    </Layout>
  );
};

export default Home;
