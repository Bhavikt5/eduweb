import React from "react";
import Title from "../comman/Title/Title";
import PricingCard from "../Pricing/PricingCard";

const HPrice = () => {
  return (
    <>
      <section className="hprice padding">
        <Title subtitle="our pricing" title="pricing & packages" />
        <div className="price grid container">
          <PricingCard />
        </div>
      </section>
    </>
  );
};

export default HPrice;
