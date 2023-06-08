import React from "react";
import { Link, useNavigate } from "react-router-dom";

function BookmarkCard({ bookmark }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/${bookmark.id}`);
  };
  return (
    <>
      <div className="bg-base-100 shadow-md rounded-md">
        <div className="p-2">
          <div className="flex justify-between items-center">
            <Link
              to={bookmark.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold"
            >
              {bookmark.title}
            </Link>
            <button
              className="btn rounded-xl bg-rose-500 text-white hover:bg-rose-600"
              onClick={handleNavigate}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookmarkCard;
