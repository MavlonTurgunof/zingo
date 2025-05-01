import React from "react";

function Button({ children }) {
  return (
    <button className="bg-[#FF556E] text-white font-semibold px-5 py-4  rounded-full flex justify-center items-center gap-4 cursor-pointer">
      {children}
    </button>
  );
}

export default Button;
