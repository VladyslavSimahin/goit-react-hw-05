// import { FriendList } from "./FriendList";
// import friends from "./friends.json";
// import { Payment } from "./Payment/Payment";
// import prices from "./paymentprice.json";

import { Header } from "./header/Header";
import { Feedback } from "./feedback/Feedback";
import { Options } from "./options/Options";
import { useState, useEffect } from "react";

// const allScore = () => {
//   const savedScores = window.localStorage.getItem("myScore");
//   if (savedScores !== null) {
//     return JSON.parse(savedScores);
//   }
//   return {
//     good: 0,
//     neutral: 0,
//     bad,
//   };
// };
export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    bad: 0,
    neutral: 0,
  });
  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const handelReset = () => {
    setFeedback({
      good: 0,
      bad: 0,
      neutral: 0,
    });
  };

  const positive = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );
  // const savedFeedback = localStorage.getItem("feedbacks");
  // if (savedFeedback) {
  //   return JSON.parse(savedFeedback);
  // }
  // useEffect(() => {
  //   localStorage.setItem("qFeedback", JSON.stringify(feedback));
  // }, [feedback]);

  return (
    <>
      <Header />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        handelReset={handelReset}
      />
      {/* <FriendList friends={friends} />
      <Payment prices={prices} /> */}
      <Feedback
        feedback={feedback}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        positive={positive}
        savedFeedback={savedFeedback}
      />
    </>
  );
};
export default App;
