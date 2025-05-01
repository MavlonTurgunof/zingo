import React from "react";

function Button({
  children,
  color = "bg-[#FF556E]",
  borderColor = "border-transparent",
  textColor = "text-white",
}) {
  return (
    <button
      className={`${color} ${textColor} ${borderColor} border font-semibold px-5 py-4 rounded-full flex justify-center items-center gap-4 cursor-pointer`}
    >
      {children}
    </button>
  );
}

export default Button;
