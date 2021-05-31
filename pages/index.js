import Screen from "../layouts/screen";
import Flashcard from "../components/flashcard";

export default function Home() {
  return (
    <Screen title="My homepage">
      <Flashcard
        title="Question 1"
        questionText="What color is the sky?"
        answerText="blue"
        nextHandler={() => {}}
      />
    </Screen>
  );
}
