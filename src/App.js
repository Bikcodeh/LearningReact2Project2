import React from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";


//Route es el que nos facilita filtrar que componente mostrar en base a la url

//el parametro exact lo que hace es que cuando la url sea exactamente la que se le esta pasando, 
//muestre el componente

//En el switch importa el orden de las rutas, primero deben ir las mas especificas
//primero va la de new, ya que es la ruta que tiene mas concatenaciones
//de segunda va la del dni, pero porque :dni es un parametro a diferencia de la de new que es algo hard code

//Y al usar el switch, el exact es innecesario ya que estamos especificando las rutas
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
          <Switch>
              <Route path="/customers/new" component={this.renderCustomerNewContainer} />
              <Route path="/customers/:dni" component={this.renderCustomerContainer} />
              <Route path="/customers" component={this.renderCustomerListContainer} />
              <Route path="/" component={this.renderHome} />
            </Switch>
          </div>
          
      </Router>
    );
  }
}

export default App;
