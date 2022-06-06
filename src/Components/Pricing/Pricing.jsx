import React from "react";
import Back from "../comman/Back/Back";
import PricingCard from "./PricingCard";
import "./pricing.css";
import Faq from "./Faq";

const Pricing = () => {
  return (
    <>
      <Back title="choose the right plan" />
      <section className="price padding">
        <div className="container grid">
          <PricingCard />
        </div>
      </section>
      <Faq />
    </>
  );
};

export default Pricing;
