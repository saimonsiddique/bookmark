import React from "react";

function BookmarkDetails() {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-md rounded-xl  bg-rose-400">
        <div className="">
          <div className="card-body">
            <h2 className="m-auto card-title">Bookmark Details</h2>
            <div className="flex flex-col bg-white p-4">
              <div>
                <span className="font-bold">Title: </span>
                <span> Facebook</span>
              </div>
              <div>
                <span className="font-bold">URL: </span>
                <span> Facebook</span>
              </div>
              <div>
                <span className="font-bold">Category: </span>
                <span> Facebook</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookmarkDetails;
