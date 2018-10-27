import React, { Component } from 'react';
import './App.css';
import {getData} from './actions/actions'

import MainComponent from './components/mainComponent'


import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import connect from "react-redux/es/connect/connect";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prevUser: 5
        }
    }

    componentDidMount() {
        this.props.getUser();
    }

  render() {
      const {prevUser} = this.state;
      const {dataUsers, loading, error} = this.props;

      let pages = [];

      for (let i = 1; i <= Math.ceil(dataUsers.length / prevUser ); i++){
          pages.push(i)
      }


      if (loading){
          return <div>Loading...</div>
      }

      if(error){
          return <div>Error! {error.message}</div>
      }


    return (
      <div className="App">
          <Router>
              <div>
                  <h2>Users</h2>
                  {
                    pages.map(id =>(
                        <button key={id}>
                            <Link to={'/' + id}>{id}</Link>
                        </button>
                    ))
                  }
                  <Route path='/:id' render={(props) => <MainComponent {...props} dataUsers = {dataUsers}/>} />
              </div>
          </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    dataUsers: state.dataUsers.items,
    loading: state.dataUsers.loading,
    error: state.dataUsers.error
});

const mapDispatchToProps = dispatch => {
    return {
        getUser: () => dispatch(getData())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(App)


