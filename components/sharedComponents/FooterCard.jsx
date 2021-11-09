import React from "react";

function FooterCard({ title, children }) {
  return (
    <div className="space-y-4">
      <h4
        className="font-semibold font-sans2 text-gray-800 p-2 text-lg"
      >
        {title}
      </h4>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

export default FooterCard;
