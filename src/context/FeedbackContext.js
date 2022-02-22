import React, { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacklist, setFeedbacklist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getFeedback();
  }, []);

  const getFeedback = async () => {
    const response = await fetch(
      "https://fake-server-db-oth.herokuapp.com/data"
    );
    const dataResponse = await response.json();
    // return dataResponse;
    setFeedbacklist(dataResponse);
    setIsLoading(false);
  };

  //delete feedback function
  const feedbackdeleteItem = (id) => {
    if (window.confirm("are you sure wanna delete this!")) {
      fetch("https://fake-server-db-oth.herokuapp.com/data/" + id, {
        method: "DELETE",
      });

      setFeedbacklist(feedbacklist.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbacklist,
        setFeedbacklist,
        isLoading,
        feedbackdeleteItem,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
