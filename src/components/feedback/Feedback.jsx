export const Feedback = ({
  feedback,
  totalFeedback,
  positive,
  saveFeedback,
}) => {
  return (
    <div>
      {totalFeedback == 0 ? (
        "No feedback yet"
      ) : (
        <div>
          <p>Good: {feedback.good}</p>
          <p>Bad: {feedback.bad} </p>
          <p>Neutral: {feedback.neutral} </p>
          <p>Total: {totalFeedback}</p>
          <p>Positive: {positive}</p>
        </div>
      )}
    </div>
  );
};
