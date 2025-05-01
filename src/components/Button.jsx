import React from "react";

function Button({
  children,
  color = "bg-[#FF556E]",
  borderColor = "border-transparent",
  textColor = "text-white",
}) {
  return (
    <button
      className={`${color} ${textColor} ${borderColor} border font-semibold md:px-5 md:py-4 px-4 py-3 rounded-full flex justify-center items-center gap-2 md:gap-4 cursor-pointer`}
    >
      {children}
    </button>
  );
}

export default Button;
