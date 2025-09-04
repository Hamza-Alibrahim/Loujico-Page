import React from "react";
import {
  DevelopmentConsulting,
  FoundingBusiness,
  ManagementConsulting,
  ProjectConsulting,
} from "../data";
import SplitLineHeader from "./SplitLineHeader";
import PortfolioSection from "./PortfolioSection";

const Portfolio = () => {
  return (
    <div className="py-20 bg-[#153457] text-white relative" id="portfolio">
      {/* <img src="/public/assets/image/block 1.png" alt="" className='w-20 absolute left-[50%] translate-x-[-50%] -top-20'/> */}
      <SplitLineHeader title="Portfolio" />
      <PortfolioSection title="Founding Business" data={FoundingBusiness} />
      <PortfolioSection
        title="Development Consulting"
        data={DevelopmentConsulting}
      />
      <PortfolioSection
        title="Management Consulting"
        data={ManagementConsulting}
      />
      <PortfolioSection title="Project Consulting" data={ProjectConsulting} />
    </div>
  );
};

export default Portfolio;
