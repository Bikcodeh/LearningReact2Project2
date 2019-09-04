import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeContainer from './components/Containers/HomeContainer';
import CustomersContainer from './components/Containers/CustomersContainer';
import CustomerCotainer from './components/Containers/CustomerContainer';
import NewCustomerContainer from './components/Containers/newCustomerContainer';
import "./App.css";


//Route es el que nos facilita filtrar que componente mostrar en base a la url

//el parametro exact lo que hace es que cuando la url sea exactamente la que se le esta pasando, 
//muestre el componente

//En el switch importa el orden de las rutas, primero deben ir las mas especificas
//primero va la de new, ya que es la ruta que tiene mas concatenaciones
//de segunda va la del dni, pero porque :dni es un parametro a diferencia de la de new que es algo hard code

//Y al usar el switch, el exact es innecesario ya que estamos especificando las rutas
class App extends React.Component{
  renderCustomerContainer = () => <h1>Customer container</h1>
  renderCustomerListContainer = () => <h1>Customers List container</h1>
  renderCustomerNewContainer = () => <h1>Customer new container</h1>

  render() {
    return (
      <Router>
          <div>
          <Switch>
              <Route path="/customers/new" component={NewCustomerContainer} />
              <Route path="/customers/:dni" render={props => <CustomerCotainer dni={props.match.params.dni} />} />
              {/** Al tenerlo con render, ya no le inyecta las otras propiedades history, match, location
                render recibe una funcion, le damos props para que coja el wildcard de la url y asi mandarselo al componente
                { ...props } se usa para mandarle tambien las propiedades del route en caso de necesitar 
                <Route path="/customers/:dni" render={props => <CustomerCotainer  { ...props} dni={props.match.params.dni} />} /> 
            */}
              <Route path="/customers" component={ CustomersContainer} />
              <Route path="/" component={ HomeContainer } />
            </Switch>
          </div>
          
      </Router>
    );
  }
}

export default App;
