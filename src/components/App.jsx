export default function App() {
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
}
