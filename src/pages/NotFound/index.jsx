import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
   const navigate = useNavigate();
   const token = localStorage.getItem("token");

   const handlerBack = () => {
      if (token) {
         navigate("/appointments");
      } else {
         navigate(-1);
      }
   };
   return (
      <div className="min-h-screen container mx-auto flex items-center justify-center flex-col">
         <h1 className="text-2xl md:text-7xl text-[#1967D2] font-black mb-3">
            404
         </h1>
         <h2 className="text-xl md:text-4xl text-[#1967D2] font-black mb-4">
            Page not found{" "}
         </h2>
         <button
            className="bg-[#1967D2] text-white px-8 py-2 rounded-md"
            onClick={handlerBack}
         >
            Back
         </button>
      </div>
   );
};

export default NotFound;
