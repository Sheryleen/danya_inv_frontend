import React from "react";
import { connect } from "react-redux";
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
  // console.log("props", props);

  let listOfCategories = props.category.map(category => (
    <Row>
      <Col sm='3'>
        <Card body>
          <CardTitle>{category.name}</CardTitle>
          <Button
            onClick={() =>
              props.history.push(`/category/${category.id}/products`)
            }
          >
            View Products
          </Button>
        </Card>
      </Col>
    </Row>
  ));

  return (
    <Container>
      <Row>
        <Col>Categories</Col>
      </Row>
      {listOfCategories}
    </Container>
  );
};

// function should return a plain object that contains the data the component needs:
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    category: state.category.all
  };
};

export default connect(mapStateToProps)(Dashboard);
