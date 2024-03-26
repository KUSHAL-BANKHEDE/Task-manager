import { useState } from "react";

export const CreateList = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = async () => {
    try {
      const response = await fetch("/lists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          description: description,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create list");
      }

      const data = await response.json();
      console.log("List created successfully:", data);
      setTitle("");
      setDescription("");
      alert("List created successfully");
    } catch (error) {
      console.error("Error creating list:", error.message);
      alert("Failed to create list. Please try again later.");
    }
  };

  return (
    <div>
      <input
        id="title"
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      ></input>{" "}
      <br />
      <input
        id="desc"
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      ></input>{" "}
      <br />
      <button
        style={{
          padding: 10,
          margin: 10,
        }}
        onClick={submitHandler}
      >
        Add a list
      </button>
    </div>
  );
};
