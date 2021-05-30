import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import { apiData } from "./commonData";
import Card from "./components/Card";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartProduct: [],
    };
  }

  addProduct = (product) => {
    this.setState({
      cartProduct: [...this.state.cartProduct, product],
    });
  };

  render() {
    const { catalogEntryView } = apiData;

    return (
      <div className="app-body">
        <NavBar cartCount={this.state.cartProduct.length} />
        <Banner />

        <div className="card-container">
          {catalogEntryView.map((item) => (
            <Card
              item={item}
              key={item.uniqueID}
              addProduct={this.addProduct}
            />
          ))}
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
