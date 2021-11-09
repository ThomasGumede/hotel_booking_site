import React from "react";

const FooterItems = ({ href, children }) => {
  return (
    <a
      href={`${href}`}
      className="text-sm text-gray-600 block p-2 w-max rounded-2xl hover:bg-h1-color hover:text-white"
    >
      {children}
    </a>
  );
};

export default FooterItems;
