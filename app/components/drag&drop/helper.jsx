import Link from "next/link";
import React, { useState } from "react";
import Pic from "./pic";
import "./dragdrop.css";
import { useDrop } from "react-dnd";

const images = [
  {
    id: 1,
    url: "development.png",
  },
  {
    id: 2,
    url: "marketing.png",
  },
  {
    id: 3,
    url: "outreach.png",
  },
];

const Helper = () => {
  const [board, setBoard] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [mailTemplate, setMailTemplate] = useState("");

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const pic = images.find((image) => image.id === id);
    setBoard((prevBoard) => [...prevBoard, pic]); // Add the image to the board
  };

  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
  };

  const handleCompanyDescriptionChange = (event) => {
    setCompanyDescription(event.target.value);
  };

  const handleMailTemplateChange = (event) => {
    setMailTemplate(event.target.value);
  };

  return (
    <>
      <div className="dragdrophai">
        <div className="subdrag">
          <h1>Your Workspace</h1>
          <div ref={drop} className="boardhai">
            {board.map((picture) => (
              <Pic
                key={picture.id}
                url={picture.url}
                id={picture.id}
                height={"100px"}
                width={"100px"}
              />
            ))}
          </div>
          <div>
            <input
              type="text"
              placeholder="Company Name"
              value={companyName}
              onChange={handleCompanyNameChange}
              className="block m-2 border-2 border-blue-700 p-2 rounded-xl"
            />
            <textarea
              placeholder="Company Description"
              value={companyDescription}
              onChange={handleCompanyDescriptionChange}
              className="block m-2 border-2 border-blue-700 p-2 rounded-xl"
            ></textarea>
            {/* <textarea
              placeholder="Mail Template"
              value={mailTemplate}
              onChange={handleMailTemplateChange}
              className="block m-2 border-2 border-blue-700 p-2 rounded-xl"
            ></textarea> */}
          </div>
          <Link
            href={{
              pathname: "/manager",
              query: {
                board: board.map((pic) => pic.id).join(","),
                companyName: companyName,
                companyDescription: companyDescription,
                // mailTemplate: mailTemplate,
              },
            }}
            className="btn btn-primary rounded-xl m-4"
          >
            Activate
          </Link>
        </div>
        <div className="subdrag">
          <h1>Available Teams</h1>
          <div className="draghai">
            {images.map((picture) => (
              <Pic
                key={picture.id}
                url={picture.url}
                id={picture.id}
                height={"100px"}
                width={"100px"}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Helper;
