import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopNav from './components/topNav/topNav';
import HomePage from './components/homePage/HomePage';
import Cms from './components/cms/cms';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Amplify, { Analytics, Storage, API, graphqlOperation  } from 'aws-amplify';
import {  S3Album } from 'aws-amplify-react';
import awsmobile from './aws-exports';
Amplify.configure(awsmobile);
Storage.configure({ level: 'private' });






class App extends Component {
  uploadFile = (evt) => {
    const file = evt.target.files[0];
    const name = file.name;

    Storage.put(name, file).then(() => {
      this.setState({ file: name });
    })
  }

  componentDidMount() {
    Analytics.record('Amplify_CLI');
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <TopNav />
            <div class="container">
            <Route exact path="/" component={HomePage}/>
            <Route path="/content/:id" component={Cms} />
            </div> 
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
