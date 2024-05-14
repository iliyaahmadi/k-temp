import React from "react";
import PropertyCard from "../components/pages/properties/PropertyCard";

const Properties = () => {
  return (
    <div className="w-full p-8 flex properties-container flex-col gap-4">
      <h1 className="text-white text-3xl">لیست املاک</h1>
      <div className="flex flex-wrap gap-4">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </div>
  );
};

export default Properties;
