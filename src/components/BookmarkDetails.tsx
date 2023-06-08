import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function BookmarkDetails() {
  const [bookmark, setBookmark] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/bookmarks/${id}`).then((res) => {
        setBookmark(res.data);
      });
    }
  }, [id]);

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
                <Link
                  to={bookmark?.url ?? ""}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {bookmark?.url}
                </Link>
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
