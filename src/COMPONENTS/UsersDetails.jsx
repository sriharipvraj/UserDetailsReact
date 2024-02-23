import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import "../COMPONENTS/UserDetails.css";
import { Link, useParams } from "react-router-dom";
import back from "../back-button.png";
import Button from "react-bootstrap/Button";

const UsersDetails = () => {
  const [users2, setUsers2] = useState([]);
  const { id } = useParams();
  const detail1 = users2[id];
  console.log(detail1);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setUsers2(data);
      });
  }, []);

  return (
    <div className="details">
      {detail1 && (
        <div className="form">
          <Link to={"/"}>
            <img src={back} alt="" width={"50px"} />
          </Link>
          <h1>ID:#{detail1.id}</h1>
          <h1>{detail1.name}</h1>
          <div className="name&email">
            <Form className="ne">
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder={detail1.name} />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder={detail1.email} />
              </Form.Group>
            </Form>
          </div>
          <div className="address">
            <h1>Address</h1>
            <div className="address">
              <Form className="faddress">
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label>Street</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={detail1.address.street}
                  />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label>Suite</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={detail1.address.suite}
                  />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={detail1.address.city}
                  />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={detail1.address.zipcode}
                  />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="number" placeholder={detail1.phone} />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label>website</Form.Label>
                  <Form.Control type="text" placeholder={detail1.website} />
                </Form.Group>
              </Form>
            </div>
            <div className="company">
              <h1>Company</h1>
              <Form className="ne">
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={detail1.company.name}
                  />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label>catch phrase</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder={detail1.company.catchPhrase}
                  />
                </Form.Group>
              </Form>
            </div>
          </div>
          <Button variant="primary">Update</Button>
        </div>
      )}
    </div>
  );
};

export default UsersDetails;
