import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

function Breadcrumb({ items }) {
  return (
    <nav className="text-sm flex items-center text-gray-600">
      {items.map((item, index) => (
        <span key={index} className="flex items-center">
          {index !== 0 && (
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
          )}
          {item.to ? (
            <Link
              to={item.to}
              className="text-blue-600 font-medium hover:underline"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-gray-700">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export default Breadcrumb;
