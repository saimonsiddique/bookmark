import { Button, Modal } from "@mui/material";
import React, { useState } from "react";
import BookMarkForm from "../components/BookMarkForm";
import BookmarkCard from "../components/BookmarkCard";
import { useEffect } from "react";
import axios from "axios";
import CategoryCard from "../components/CategoryCard";
import BookmarkDetails from "../components/BookmarkDetails";

function Bookmark() {
  const [open, setOpen] = useState(false);
  const [allBookmarks, setAllBookmarks] = useState(null);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8080/categories").then((res) => {
      setCategories(res.data);
    });

    axios.get("http://localhost:8080/bookmarks").then((res) => {
      setAllBookmarks(res.data);
    });
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (bookmark, e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/bookmarks", bookmark).then((res) => {
      setAllBookmarks([...allBookmarks, res.data]);
    });
    console.log(bookmark);
  };

  return (
    <div className="flex">
      <div className="flex-[0.7] grid grid-cols-2 gap-3 m-3">
        {categories &&
          categories.map((category) => (
            <div>
              <div
                key={category.name}
                className="text-2xl mb-2 text-Black font-semibold"
              >
                {category.name}
              </div>
              <CategoryCard key={category.id} category={category}>
                {allBookmarks &&
                  allBookmarks?.map((bookmark) => {
                    if (bookmark.category === category.name) {
                      return (
                        <BookmarkCard key={bookmark.id} bookmark={bookmark} />
                      );
                    }
                  })}
              </CategoryCard>
            </div>
          ))}
      </div>
      <div className="flex-[0.3] flex flex-col m-2">
        <div className="flex justify-end">
          <Button variant="contained" onClick={handleOpen}>
            Create Bookmark
          </Button>
          <Modal open={open} onClose={handleClose}>
            <div className="bg-white p-4 w-96 mt-12 mr-2 float-right rounded-md">
              <BookMarkForm
                submitForm={handleSubmit}
                handleClose={handleClose}
              />
            </div>
          </Modal>
        </div>
        <div className="mt-[65vh] ml-36">
          <BookmarkDetails />
        </div>
      </div>
    </div>
  );
}

export default Bookmark;
