import React, { Component } from 'react';
import 'whatwg-fetch';
import { BrowserRouter as Router, Route } from "react-router-dom";
import history from './history.js';
// import logo from './logo.svg';
import Header from './common/Header';
import LocationContainer from './components/LocationContainer';
import LocationDetail from './components/LocationDetail';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props)    
    this.state = {
      listings : [],
      venues: []
    };
  }

  componentDidMount(){
    fetch('https://api.foursquare.com/v2/venues/explore?ll=53.7457,-0.319427&venuePhotos=1&client_id=TKEVJ4LEPMYVVRHUXE2CYEKNWDXT4GTI5EZTP1ZA5UJ0WMQS&client_secret=00LABKZSDYAXJQDNILCFFEB1JYD0LHJMAI3JETYSICWVKQ31&v=20170708')
      .then((response) => {
          return response.json()
      }).then((json) => {
        this.setState({
          listings : json.response.groups[0].items,
        })
        for (let index = 0; index < this.state.listings.length; index++) { 
          this.state.venues.push(this.state.listings[index].venue);
        }
      })
  }

  render() {
    return (
      <Router history = {history}>
        <div className="App">
          <div className="container-fluid">
            <Header/>
            <Route exact path='/' render ={() => (<LocationContainer listings = {this.state.listings}/>)}/>
            <Route path='/detail/:id' render={({match}) => (<LocationDetail detail={this.state.venues.find(venue => venue.id === match.params.id)}/>)}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
