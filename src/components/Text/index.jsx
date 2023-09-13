import React from "react";

const sizeClasses = {
  txtAgrandirGrandHeavy40: "font-agrandir font-extrabold",
  txtAgrandirGrandHeavy40WhiteA700: "font-agrandir font-extrabold",
  txtMulishRegular16WhiteA700: "font-mulish font-normal",
  txtAgrandirWideHeavy12: "font-agrandir font-extrabold",
  txtMulishBold10Gray700: "font-bold font-mulish",
  txtAgrandirGrandHeavy22: "font-agrandir font-extrabold",
  txtMulishRegular16: "font-mulish font-normal",
  txtAgrandirWideHeavy193: "font-agrandir font-extrabold",
  txtMulishBold10: "font-bold font-mulish",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
