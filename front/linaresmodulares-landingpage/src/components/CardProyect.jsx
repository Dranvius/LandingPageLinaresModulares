import { Card } from "bootstrap-4-react";

export const CardProyect = (props) => {
  //console.log(props.contextReact);

  return (
    <>
      <Card.Deck mb="3">
        {props.contextReact.proyecto.map((element, key) => (
          <Card key={key}>
            <Card.Image src="../src/img/test.jpg" />
            <Card.Body>
              <Card.Title>{element.titleText}</Card.Title>
              <Card.Text>{element.bodyText}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Card.Deck>
    </>
  );
};
