import React, {Component} from 'react';


class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prevPage: 5
        };
    }


    render(){
        const {dataUsers} = this.props;
        const {prevPage} = this.state;
        const {id} = this.props.match.params;
        console.log(this.props);


        const indexOfLastUser = id * prevPage;
        const indexOfFirstUser = indexOfLastUser - prevPage;
        const currentUsers = dataUsers.slice(indexOfFirstUser, indexOfLastUser);


        const renderUsers = currentUsers.map(item=>(
           <div key={item.id}>
               <span style={{fontSize:'25px'}}>{item.name} </span>
               <span style={{fontSize:'25px'}}>{item.surname}</span>
               <p>{item.desc}</p>
           </div>
        ));

        return(
            <div>
                <div>
                    {renderUsers}
                </div>
            </div>
        )
    }
}

export default MainComponent;
