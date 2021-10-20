import React from "react";
import PlaceData from "../../json/tour.json";
import { Link, useParams } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import { CardGroup, Button } from "react-bootstrap";
import {Header} from "../../LayOut/Header/Header";
import "./cat.css";
import { Footer } from "../../footer/Footer";

export const Catagory = () => {
  const { place_id } = useParams();
  let Catagory_page = PlaceData.Places.find((data) => data.id === place_id);
  console.log(Catagory_page);

  return (
    <body id="catagory">
      <Header></Header>
      <div id="cat">
        <h5>
          <Link
            id="linkC"
            to={`/Places/${place_id}/${Catagory_page.p_name}`}
          >
            {Catagory_page.p_name}
          </Link>
        </h5>
        <Container>
          <CardGroup>
            {Catagory_page.catagory.map((c) => (
              <Card className="card" id="cardC">
                <Card.Img id="img2" variant="top" src={c.c_image} />
                <Card.Body>
                  <Card.Title id="Ctitle">
                    {c.c_name}
                  </Card.Title>
                  <Card.Text>
                    <Button variant="info" id="btnC">
                      <Link
                        to={`/Details/${place_id}/${c.id}`}
                      >
                        
                        View Details
                      </Link>
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </CardGroup>
        </Container>
        
      </div>
      <Footer/>
    </body>
  );
};
