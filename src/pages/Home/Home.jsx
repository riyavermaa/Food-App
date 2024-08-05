import React from "react";
import Layout from "../../components/Layouts/Layout";
import "../../styles/HomeStyle.css";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section6 from "./Section6";
import Section7 from "./Section7"; 
const Home = () => {
  return (
    <>
      <Layout>
        {/* Home Section Hero Banner */}
        <Section1 />

        {/* Home Section About */}
        <Section2 />

        {/* Home Section menu */}
        <Section3 />

        <Section4 />

        <Section6 />

        <Section7 />
      
        
      </Layout>
    </>
  );
};

export default Home;