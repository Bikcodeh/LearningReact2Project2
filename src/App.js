import React from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";


//Route es el que nos facilita filtrar que componente mostrar en base a la url
//el parametro exact lo que hace es que cuando la url sea exactamente la que se le esta pasando, 
//muestre el componente
class App extends React.Component{
  renderHome = () => <h1>Home</h1>
  renderCustomerContainer = () => <h1>Customer container</h1>
  renderCustomerListContainer = () => <h1>Customers List container</h1>
  renderCustomerNewContainer = () => <h1>Customer new container</h1>

  render() {
    return (
      <Router>
        {/** <div className="App">
          <Link to="/customers">Customers</Link>
          </div> */}
          <div>
            <Route exact path="/" component={this.renderHome} />
            <Route exact path="/customers" component={this.renderCustomerListContainer} />
            <Route exact path="/customers/:dni" component={this.renderCustomerContainer} />
            <Route exact path="/customers/new" component={this.renderCustomerNewContainer} />
          </div>
          
      </Router>
    );
  }
}

export default App;
