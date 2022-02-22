export const FeedbackState = ({ feedbacklist }) => {
  let calculateTheAverage = () => {
    let sumRating = 0;

    for (var i = 0; i < feedbacklist.length; i++) {
      sumRating += feedbacklist[i].rating;
    }
    // return Math.floor(sumRating / feedbacklist.length);
    return (sumRating / feedbacklist.length).toFixed(1).replace(/[.,]0$/, "");
  };

  if (feedbacklist.length == 0) {
    return null;
  }
  return (
    <div className="flex justify-between bg-slate-200 p-2 rounded shadow-lg">
      <div>{feedbacklist.length} reviews</div>
      <div>
        average rating :
        {isNaN(calculateTheAverage()) ? 0 : calculateTheAverage()}
      </div>
    </div>
  );
};
