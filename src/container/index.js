import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getData} from '../actions/actions'

import MainComponent from '../components/mainComponent'

class MainContainer extends Component {


    componentDidMount() {
        this.props.getUser();
    }



    render(){
        const {dataUsers, loading, error} = this.props;

        if (loading){
            return <div>Loading...</div>
        }

        if(error){
            return <div>Error! {error.message}</div>
        }

        return dataUsers ?
            <div>
                <MainComponent
                    dataUsers = {dataUsers}
                />
            </div>: null;
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


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)