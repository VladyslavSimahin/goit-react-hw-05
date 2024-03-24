export const Options = ({ updateFeedback, totalFeedback, handelReset }) => {
  return (
    <div>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral </button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 ? (
        <button onClick={() => handelReset("good", "neutral", "bad")}>
          Reset
        </button>
      ) : (
        ""
      )}
    </div>
  );
};
2;
