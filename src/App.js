import React, { Component } from 'react';
import 'whatwg-fetch';
// import logo from './logo.svg';
import Header from './common/Header';
import ListContainer from './components/ListContainer';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props)
    
    this.state = {
      listings : []
    };

    fetch('https://api.foursquare.com/v2/venues/explore?ll=53.7457,-0.319427&venuePhotos=1&client_id=TKEVJ4LEPMYVVRHUXE2CYEKNWDXT4GTI5EZTP1ZA5UJ0WMQS&client_secret=00LABKZSDYAXJQDNILCFFEB1JYD0LHJMAI3JETYSICWVKQ31&v=20170708')
      .then((response) => {
          return response.json()
      }).then((json) => {
        this.setState({
          listings : json.response.groups[0].items
        })
      })
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <Header/>
          <ListContainer listings={this.state.listings}/>
        </div>
      </div>
    );
  }
}

export default App;



