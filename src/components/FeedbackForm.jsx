import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
export const FeedbackForm = ({ feedback, setFeedback }) => {
  const [text, setText] = useState("");
  const [btnstate, setBtnState] = useState("disabled");
  const [selectedRating, setSelectedRating] = useState();

  const { feedbacklist, setFeedbacklist } = useContext(FeedbackContext);

  const handlechange = (e) => {
    if (e.target.value.length < 15) {
      setBtnState("disabled");
      setText("");
    } else {
      setBtnState("");
      setText(e.target.value);
    }
  };

  const handleSelectedRating = (e) => {
    setSelectedRating(+e.target.value);
  };

  const handleAddFeedback = () => {
    if (selectedRating == undefined) {
      return alert("please select rating");
    }
    let newFeedback = {
      id: "",
      rating: selectedRating,
      text: text,
    };
    newFeedback.id = uuidv4();
    setFeedbacklist([newFeedback, ...feedbacklist]);

    // add to fake server
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFeedback),
    };
    fetch("https://fake-server-db-oth.herokuapp.com/data", requestOptions);
    // .then((data) => setFeedbacklist([newFeedback, ...feedbacklist]));
  };
  return (
    <div className="bg-slate-200 w-4/5 text-zinc-900 m-5 p-4 rounded-lg relative mt-6 shadow-lg ">
      <div className="text-center">
        <h2 className="text-lg font-semibold">Rate Our service </h2>
      </div>
      <div>
        <ul className="flex justify-center gap-5 p-12">
          <li>
            <input
              className="hidden"
              type="radio"
              name="ratingnumber"
              id="number1"
              value={1}
              onChange={handleSelectedRating}
              checked={selectedRating === 1}
            />
            <label
              htmlFor="number1"
              className="flex items-center justify-center h-9 w-9 rounded-full text-white bg-purple-400 hover:bg-purple-700 cursor-pointer"
            >
              1
            </label>
          </li>
          <li>
            <input
              className="hidden"
              type="radio"
              name="ratingnumber"
              id="number2"
              value={2}
              onChange={handleSelectedRating}
              checked={selectedRating === 2}
            />
            <label
              htmlFor="number2"
              className="flex items-center justify-center h-9 w-9 rounded-full text-white bg-purple-400 hover:bg-purple-700 cursor-pointer"
            >
              2
            </label>
          </li>
          <li>
            <input
              className="hidden"
              type="radio"
              name="ratingnumber"
              id="number3"
              value={3}
              onChange={handleSelectedRating}
              checked={selectedRating === 3}
            />
            <label
              htmlFor="number3"
              className="flex items-center justify-center  h-9 w-9 rounded-full text-white bg-purple-400 hover:bg-purple-700 cursor-pointer"
            >
              3
            </label>
          </li>
          <li>
            <input
              className="hidden"
              type="radio"
              name="ratingnumber"
              id="number4"
              value={4}
              onChange={handleSelectedRating}
              checked={selectedRating === 4}
            />
            <label
              htmlFor="number4"
              className="flex items-center justify-center  h-9 w-9 rounded-full text-white bg-purple-400 hover:bg-purple-700 cursor-pointer"
            >
              4
            </label>
          </li>
          <li>
            <input
              className="hidden"
              type="radio"
              name="ratingnumber"
              id="number5"
              value={5}
              onChange={handleSelectedRating}
              checked={selectedRating === 5}
            />
            <label
              htmlFor="number5"
              className="flex items-center justify-center  h-9 w-9 rounded-full text-white bg-purple-400 hover:bg-purple-700 cursor-pointer"
            >
              5
            </label>
          </li>
          <li>
            <input
              className="hidden"
              type="radio"
              name="ratingnumber"
              id="number6"
              value={6}
              onChange={handleSelectedRating}
              checked={selectedRating === 6}
            />
            <label
              htmlFor="number6"
              className="flex items-center justify-center  h-9 w-9 rounded-full text-white bg-purple-400 hover:bg-purple-700 cursor-pointer"
            >
              6
            </label>
          </li>
          <li>
            <input
              className="hidden"
              type="radio"
              name="ratingnumber"
              id="number7"
              value={7}
              onChange={handleSelectedRating}
              checked={selectedRating === 7}
            />
            <label
              htmlFor="number7"
              className="flex items-center justify-center  h-9 w-9 rounded-full text-white bg-purple-400 hover:bg-purple-700 cursor-pointer"
            >
              7
            </label>
          </li>
          <li>
            <input
              className="hidden"
              type="radio"
              name="ratingnumber"
              id="number8"
              value={8}
              onChange={handleSelectedRating}
              checked={selectedRating === 8}
            />
            <label
              htmlFor="number8"
              className="flex items-center justify-center  h-9 w-9 rounded-full text-white bg-purple-400 hover:bg-purple-700 cursor-pointer"
            >
              8
            </label>
          </li>
          <li>
            <input
              className="hidden"
              type="radio"
              name="ratingnumber"
              id="number9"
              value={9}
              onChange={handleSelectedRating}
              checked={selectedRating === 9}
            />
            <label
              htmlFor="number9"
              className="flex items-center justify-center  h-9 w-9 rounded-full text-white bg-purple-400 hover:bg-purple-700 cursor-pointer"
            >
              9
            </label>
          </li>
          <li>
            <input
              className="hidden"
              type="radio"
              name="ratingnumber"
              id="number10"
              value={10}
              onChange={handleSelectedRating}
              checked={selectedRating === 10}
            />
            <label
              htmlFor="number10"
              className="flex items-center justify-center  h-9 w-9 rounded-full text-white bg-purple-400 hover:bg-purple-700 cursor-pointer"
            >
              10
            </label>
          </li>
        </ul>
      </div>
      <div className="flex justify-between items-stretch gap-3">
        <input
          onChange={handlechange}
          type="text"
          className="mt-1 block w-full px-3 p-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        />
        <button
          type="submit"
          className="disabled:opacity-20 rounded px-4 uppercase cursor-pointer tracking-wider bg-purple-600 text-white"
          disabled={btnstate}
          onClick={handleAddFeedback}
        >
          submit
        </button>
      </div>
      {btnstate && (
        <p className="text-center text-blue-600 capitalize p-2">
          the minimun length should be 15 characther
        </p>
      )}
    </div>
  );
};
