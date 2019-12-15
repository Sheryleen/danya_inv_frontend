import React from "react";
import { connect } from "react-redux";
import { Button, Card, CardTitle, Row, Col } from "reactstrap";
const ProductsList = props => {
  let listOfFilteredProducts = props.filteredProducts.map(product => (
    <Row>
      <Col sm='3'>
        <Card body>
          <CardTitle>{product.item_name}</CardTitle>
          <Button onClick={() => props.history.push(`/products/${product.id}`)}>
            View Product
          </Button>
        </Card>
      </Col>
    </Row>
  ));
  return <div>{listOfFilteredProducts}</div>;
};
function mapStateToProps(state, props) {
  return {
    filteredProducts: state.products.all.filter(
      product => product.category_id === Number(props.match.params.id)
    )
  };
}
export default connect(mapStateToProps)(ProductsList);
