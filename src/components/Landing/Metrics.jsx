import React from "react";
import { metricsContent } from "../../data";

function Metrics() {
  return (
    <div className="bg-gradient-to-b from-prim   to-sec text-white w-full text-center py-12 px-4 flex flex-col md:flex-row items-center justify-center gap-y-8">
      <div className="flex flex-col items-center md:items-start md:pr-24">
        <div className="text-5xl text-white tracking-wide font-bold">
          {metricsContent.facts[0].number}
        </div>
        <div className="text-2xl text-white tracking-wide">
          {metricsContent.facts[0].text}
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start ">
        <div className="text-5xl text-white tracking-wide font-bold">
          {metricsContent.facts[1].number}
        </div>
        <div className="text-2xl text-white tracking-wide">
          {metricsContent.facts[1].text}
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start md:pl-24">
        <div className="text-5xl text-white tracking-wide font-bold">
          {metricsContent.facts[2].number}
        </div>
        <div className="text-2xl text-white tracking-wide">
          {metricsContent.facts[2].text}
        </div>
      </div>
    </div>
  );
}

export default Metrics;
