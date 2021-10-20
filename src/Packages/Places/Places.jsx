import React,{useState,useEffect} from "react";
import PlaceData from "../../json/tour.json";
import { Link } from "react-router-dom";
import { Card, Row, Col, Container, FormControl } from "react-bootstrap";
import { Header } from "../../LayOut/Header/Header";
import './places.css';
import { Footer } from "../../footer/Footer";

const Places = () => {
  const [items, setItems] = useState(PlaceData.Places);
  const [search, setSearch] = useState("");
  const [filterdata, setFilterdata] = useState("");
  console.log(filterdata);

  useEffect(() => {
    setFilterdata(
      items.filter(
        (v) =>
          v.p_name.toLowerCase().includes(search.toLowerCase()) ||
          v.speciality.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log(PlaceData);
  return (
    <body id="places">
      <Header></Header>

      <Container>
        <div id="pl">
          <FormControl
            className="search"
            type="text"
            placeholder="Search Places or Specialities"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            onChange={(e) => setSearch(e.target.value)}
          />
          {filterdata.length === 0 ? (
            <h2 id="noimage">No results found</h2>
          ) : (
            <>
              <Row xs={2} md={4} lg={4} className="g-4">
                {filterdata.map((elem) => {
                  const { p_name, p_img, id, speciality } = elem;

                  return (
                    <Col>
                      <Card id="totalcard">
                        <Card.Img id="img1" variant="top" src={p_img} />
                        <Card.Body id="pcardbody">
                          <Card.Title id="ptitle">
                            <Link
                              id="linkP"
                              to={`/catagory/${id}`}
                              key={p_name}
                            >
                              {p_name} 
                            </Link>
                          </Card.Title>
                          <p id="spcl">{speciality}</p>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </>
          )}
        </div>
      </Container>
      <Footer/>
    </body>
  );
};
export default Places