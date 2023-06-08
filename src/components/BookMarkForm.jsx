import React, { useState } from "react";
import { TextField, Autocomplete, Button } from "@mui/material";

function BookMarkForm() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <div className="m-2 p-24 bg-white shadow-xl w-96">
      <form className="flex flex-col gap-4">
        <div className="text-xl font-semibold">Add a Bookmark</div>
        <TextField label="Title" variant="outlined" required />
        <TextField label="URL" variant="outlined" required />
        <div className="flex gap-4">
          <Autocomplete
            disablePortal
            options={category}
            renderInput={(params) => <TextField {...params} label="Category" />}
          />
          <button className="btn rounded-md bg-white hover:bg-green-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
              />
            </svg>
          </button>
        </div>
        <Button variant="contained" type="submit">
          Add Bookmark
        </Button>
      </form>
    </div>
  );
}

export default BookMarkForm;

const category = ["A", "B", "C", "Work"];
