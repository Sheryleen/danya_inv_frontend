import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { connect } from "react-redux";
import { updateProduct } from "../store/products/actions";

// You can access props using the props parameter
const EditProductForm = props => {
  //creating state for agenda and user
  const [product, setProduct] = useState({});
  //   const [appt, setAppt] = useState("");

  useEffect(() => {
    setProduct(props.product);
  }, [props.product]);

  function handleSubmit(e) {
    e.preventDefault();
    props.updateProduct();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for='sku'>Sku</Label>
        <Input
          type='text'
          name='sku'
          id='sku'
          onChange={e => setProduct(e.target.value)} //value should reflect the value of product we set to state
          value={product && product.product}
        />
      </FormGroup>

      <Button>Submit</Button>
    </Form>
  );
};

//getting all users and appointment with id from url
const mapStateToProps = (state, props) => {
  return {
    product: state.products.all.find(
      product => product.id == props.match.params.id
    )
  };
};

export default connect(mapStateToProps, { updateProduct })(EditProductForm);
