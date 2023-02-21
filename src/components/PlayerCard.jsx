import { Card } from "react-bootstrap";

const PlayerCard = ({name, img, statistics}) => {
    
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
};

export default PlayerCard;