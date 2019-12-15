import React, { useEffect } from "react"; //use effect 90% of lifecycle methods built into one
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Dashboard from "./components/Dashboard";
import TopNav from "./components/TopNav";
import { fetchAllProducts } from "./store/products/actions";
import EditProductForm from "./components/EditProductForm";
import AddProductForm from "./components/AddProductForm";
import { fetchAllCategory } from "./store/category/actions";
import ProductsList from "./components/ProductsList";
import SingleProduct from "./components/SingleProduct";

//useEffect requires 2 arguments
//1st argument should be a/k/a componentDidMount
function App(props) {
  useEffect(() => {
    props.fetchAllProducts();
    props.fetchAllCategory();
  }, []);

  return (
    <Router>
      <div className='App'>
        <TopNav />
        <Container fluid>
          <Row>
            <Col>
              <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route path='/category/:id/products' component={ProductsList} />
                <Route path='/products/:id/edit' component={EditProductForm} />
                <Route path='/products/:id' component={SingleProduct} />
                <Route path='/products' component={AddProductForm} /> 
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default connect(null, { fetchAllProducts, fetchAllCategory })(App);
