import React from "react";
import { Table, Button } from "reactstrap";
import { connect } from "react-redux";
import { removeProduct } from "../store/products/actions";

const Dashboard = props => {
  console.log("props", props);

  let listOfProducts = props.products.map(product => (
    <tr>
      <th>{product.created_at}</th>
      {/* <td>{appt.user_id}</td> */}
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
    <Table>
      <thead>
        <tr>
          <th>Date/Time</th>
          <th>sku#</th>
          <th>item_name</th>
          <th>description</th>
          <th>quantity</th>
        </tr>
      </thead>
      <tbody>{listOfProducts}</tbody>
    </Table>
  );
};

// function should return a plain object that contains the data the component needs:
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    products: state.products.all
  };
};

export default connect(mapStateToProps, { removeProduct })(Dashboard);
