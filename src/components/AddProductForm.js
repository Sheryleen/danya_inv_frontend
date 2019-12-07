import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { connect } from "react-redux";
import { addProduct } from "../store/products/actions";

// You can access props using the props parameter
const AddProductForm = props => {
  //creating state for products
  const [product, setProduct] = useState("");
  //    const [user, setUser] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    props.addProduct({ product, product_id: product });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for='Product'>Product</Label>
        <Input
          type='text'
          name='product'
          id='product'
          onChange={e => setProduct(e.target.value)}
          value={product}
        />
      </FormGroup>

      <Button>Submit</Button>
    </Form>
  );
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    products: state.products.all
  };
};

export default connect(mapStateToProps, { addProduct })(AddProductForm);
