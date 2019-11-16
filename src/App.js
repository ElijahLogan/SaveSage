import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/Pages/NavBar';
import Health from './components/Pages/Health';
import Nutrition from './components/Pages/Nutrition';
import RecipeSearch from './components/Pages/RecipeSearch';
import Landing from './components/Pages/Landing';
import Edam from './components/util/Edam';
import Footer from './components/Pages/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';





class App extends Component {
  constructor(props){
    super(props)
    this.state = {recipes:[]}
    this.searchEdam = this.searchEdam.bind(this)
  }
async componentWillMount(){
  
}


async searchEdam(term){
  let recipes =  await Edam.search(term)
  let data = recipes.data.recipes
    this.setState({recipes:data})
    console.log(this.state.recipes)
}

  render() {
    return (
     
  <Router>
    <Fragment>
          <NavBar/>
         <Route exact path="/" component={Landing}/>
         <section className="container">
                <Switch>
                  <Route exact path = '/recipe-search' component = {RecipeSearch} />
                  <Route exact path ='/questions' component={Nutrition}/>
                  <Route exact path ='/health-tips' component={Health}/>
                </Switch>
         </section>
         <Footer/>
     </Fragment>
  </Router>


    );
  }
}

export default App;
