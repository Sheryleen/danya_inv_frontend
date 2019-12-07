import React, { useEffect } from "react"; //use effect 90% of lifecycle methods built into one
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Dashboard from "./components/Dashboard";
import TopNav from "./components/TopNav";
import { fetchAllProducts } from "./store/products/actions";
import EditProductForm from "./components/EditProductForm";
import AddProductForm from "./components/AddProductForm";

//useEffect requires 2 arguments
//1st argument should be a/k/a componentDidMount
function App(props) {
  useEffect(() => {
    props.fetchAllProducts(); 
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
                <Route path='/products/:id' component={EditProductForm} />
                <Route path='/products/:id' component={AddProductForm} /> }
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default connect(null, { fetchAllProducts })(App);
