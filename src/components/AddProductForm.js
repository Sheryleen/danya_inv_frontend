import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { connect } from "react-redux";
import { addProduct } from "../store/products/actions";

// You can access props using the props parameter
const AddProductForm = props => {
  //creating state for products
  const [category_id, setCategory] = useState("1");
  const [sku, setSku] = useState("");
  const [item_name, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState("");
  const [quantity, setQuantity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.addProduct({
      category_id,
      sku,
      item_name,
      description,
      cost,
      quantity
    });
  }

  let listOfCategories = props.categories.map(category => (
    <option value={category.id}>{category.name}</option>
  ));

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for='category'>Category</Label>
        <Input
          type='select'
          name='category'
          onChange={e => setCategory(e.target.value)}
          value={category_id}
        >
          {listOfCategories}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for='sku'>SKU</Label>
        <Input
          type='text'
          name='sku'
          id='sku'
          onChange={e => setSku(e.target.value)}
          value={sku}
        />
      </FormGroup>
      <FormGroup>
        <Label>Item Name</Label>
        <Input
          type='text'
          name='item_name'
          onChange={e => setItemName(e.target.value)}
          value={item_name}
        />
      </FormGroup>
      <FormGroup>
        <Label>Description</Label>
        <Input
          type='text'
          name='description'
          onChange={e => setDescription(e.target.value)}
          value={description}
        />
      </FormGroup>
      <FormGroup>
        <Label>Cost</Label>
        <Input
          type='text'
          name='cost'
          id='cost'
          onChange={e => setCost(e.target.value)}
          value={cost}
        />
      </FormGroup>
      <FormGroup>
        <Label>Quantity</Label>
        <Input
          type='text'
          name='quantity'
          id='quantity'
          onChange={e => setQuantity(e.target.value)}
          value={quantity}
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    categories: state.category.all,
    products: state.products.all
  };
};

export default connect(mapStateToProps, { addProduct })(AddProductForm);
