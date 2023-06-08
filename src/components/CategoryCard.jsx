import React from "react";

function CategoryCard({ children }) {
  return (
    <>
      <div className="bg-rose-300 flex flex-col gap-2 p-2 h-fit rounded-md">
        {children}
      </div>
    </>
  );
}

export default CategoryCard;
