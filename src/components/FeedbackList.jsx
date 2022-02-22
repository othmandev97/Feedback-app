import React from "react";
import { FeedbackItem } from "./FeedbackItem";
import { FeedbackState } from "./FeedbackState";

import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
export const FeedbackList = ({ deleteFeedback }) => {
  const { feedbacklist, isLoading } = useContext(FeedbackContext);

  if (isLoading) {
    return <div className="lds-dual-ring"></div>;
  }
  if (feedbacklist.length === 0) {
    return (
      <div className="feedbackitems flex flex-col justify-center items-center">
        <p>there is no feedback...</p>
      </div>
    );
  }

  return (
    <div className="p-5">
      <FeedbackState feedbacklist={feedbacklist} />
      {feedbacklist.map((feedback) => (
        <FeedbackItem
          deleteFeedback={deleteFeedback}
          key={feedback.id}
          feedback={feedback}
        />
      ))}
    </div>
  );
};
