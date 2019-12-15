import React from "react";
import { connect } from "react-redux";
import { removeProduct } from "../store/products/actions";
import { Button } from "reactstrap";

const SingleProduct = props => {
  console.log("props in sp", props);
  return (
    <div>
      {props.product.item_name}
      <Button
        onClick={() => props.history.push(`/products/${props.product.id}/edit`)}
      >
        Edit
      </Button>
      <Button
        onClick={() => {
          props.removeProduct(props.product.id);
          props.history.push("/");
        }}
      >
        Remove
      </Button>
    </div>
  );
};
function mapStateToProps(state, props) {
  return {
    product: state.products.all.find(
      product => product.id === Number(props.match.params.id)
    ),
    categories: state.category.all
  };
}
export default connect(mapStateToProps, { removeProduct })(SingleProduct);
