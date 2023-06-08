import React from "react";

function CategoryCard() {
  return (
    <>
      <div className="card bg-base-100 shadow-md rounded-md">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <div className="text-xl">Facebook</div>
            <button className="btn rounded-xl bg-rose-400 text-white">
              Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryCard;
