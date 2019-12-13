import React from "react";
import { connect } from "react-redux";
import { removeProduct } from "../store/products/actions";
import CategoryCard from "../components/CategoryCard";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Container
} from "reactstrap";

const Dashboard = props => {
  console.log("props", props);

  let listOfProducts = props.products.map(product => (
    <tr>
      <th>{product.created_at}</th>
      <td>
        <Button
          onClick={() => props.history.push(`/products/${product.id}`)}
          color='warning'
        >
          Edit
        </Button>
        <Button onClick={() => props.removeProduct(product.id)} color='danger'>
          Delete
        </Button>
      </td>
    </tr>
  ));
  return (
    <Container>
      <Row>
        <Col>Hair Dyes</Col>
      </Row>
      <Row>
        <Col sm='3'>
          <Card body>
            <CardTitle>Gold Dyes</CardTitle>
            <CardText>Click for List of Products.</CardText>
            <Button>View Inventory</Button>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm='3'>
          <Card body>
            <CardTitle>Red Dyes</CardTitle>
            <CardText>Click for List of Products.</CardText>
            <Button>View Inventory</Button>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm='3'>
          <Card body>
            <CardTitle>Copper Dyes</CardTitle>
            <CardText>Click for List of Products</CardText>
            <Button>View Inventory</Button>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm='3'>
          <Card body>
            <CardTitle>Equipment</CardTitle>
            <CardText>Click for List of Products</CardText>
            <Button>View Inventory</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

// function should return a plain object that contains the data the component needs:
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    products: state.products.all
  };
};

export default connect(mapStateToProps, { removeProduct })(Dashboard);
