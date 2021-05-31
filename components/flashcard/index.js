import Button from "react-bootstrap/Button";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import ReactCardFlip from "react-card-flip";

export default function (props) {
  const { title, questionText, answerText, nextHandler } = props;
  const [flipped, setFlipped] = useState(false);
  return (
    <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{questionText}</Card.Text>
          <Button onClick={() => setFlipped(true)}>Show answer</Button>
          <Button onClick={() => nextHandler()}>Next card</Button>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Answer</Card.Title>
          <Card.Text>{answerText}</Card.Text>
          <Button onClick={() => setFlipped(false)}>Back</Button>
        </Card.Body>
      </Card>
    </ReactCardFlip>
  );
}
