import React from "react";

const page = () => {
  return (
    <div className=" bg-white dark:bg-black ml-auto font-poppins p-6  w-[880px] rounded-2xl">
      <div className="jb">
        <h2 className=" text-black dark:text-white" style={{  fontSize: "40px", fontWeight: "bold" }}>
          Services I Offered
        </h2>
        <div className=" cc   gap-4 dark:bg-gray-900 bg-gray-100 text-[#4770ff] font-semibold px-4 py-2 rounded-md">
          <div className="relative h-2 w-2">
            <span class=" top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] absolute rounded-full h-2 w-2 bg-[#4770ff]"></span>
            <span class="animate-ping absolute h-2 w-2 rounded-full bg-[#4770ff] opacity-75"></span>
          </div>{" "}
          <h2>Available For Hire</h2>
        </div>
      </div>
    </div>
  );
};

export default page;
