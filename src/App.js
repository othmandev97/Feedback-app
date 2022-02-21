import React, { useState } from "react";
import { Header } from "./components/Header";
import { FeedbackForm } from "./components/FeedbackForm";
import { FeedbackList } from "./components/FeedbackList";

// context
import { FeedbackProvider } from "./context/FeedbackContext";

import { data } from "./data";
function App() {
  return (
    <>
      <FeedbackProvider>
        <Header />
        <div className="app container mx-auto flex flex-col justify-center items-center">
          <FeedbackForm />
          <FeedbackList />
        </div>
      </FeedbackProvider>
    </>
  );
}

export default App;
