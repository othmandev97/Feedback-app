import React from "react";
import { Card } from "./reusable/Card";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
export const FeedbackItem = ({ feedback }) => {
  const { feedbackdeleteItem } = useContext(FeedbackContext);

  return (
    <div className="feedbackitems">
      <Card>
        <div className="feedback-number absolute -left-4 -top-4 flex items-center justify-center  h-9 w-9 rounded-full text-white bg-purple-400">
          {feedback.rating}
        </div>
        <button
          onClick={() => feedbackdeleteItem(feedback.id)}
          className="absolute top-0 right-2 text-purple-500 font-bold "
        >
          x
        </button>
        <div className="feedback-title p-1">{feedback.text}</div>
      </Card>
    </div>
  );
};
