import React from "react";
import IMGP from "/images/properties/property-card.jpg";
import Image from "../../ui/Image"
import Button from "../../ui/Button"
import { Link } from "react-router-dom";

const PropertyCard = ({ }) => {
  return (
    <div
      className="w-1/3 p-6 rounded-xl propertycard-container bg-gray-500 text-white transition-all transition-100"
      style={{ height: "400px", minWidth: "250px" }}
    >
      <div className="w-full h-full flex flex-col justify-between ">
        <div className="w-full h-1/2 flex justify-center">
          <Image url={'properties/property-card.jpg'} imgClass="h-full rounded-md object-cover" altName="ملک" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <h1 className="text-3xl">نام ملک</h1>
          <div className="text-md flex flex-col gap-2 font-thin">
            <p>قیمت : 140,000,000,000 تومان</p>
            <p>تاریخ افزودن : 1402/02/13</p>
          </div>
        </div>
        <Link to='/dashboard/properties/1111'>
          <Button title={'مشاهده جزییات ملک'} btnClass="w-full p-2 button rounded-xl text-md hover:cursor-pointer hover:bg-indgo-400" />
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;

//The list of the properties

//property name

//Price: 145,000,000,000 Tomans

//Date added: 1402/03/01

//SEE PROPERTY DETAILS