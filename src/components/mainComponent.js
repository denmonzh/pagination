import React, {Component} from 'react';




class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            prevPage: 5
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event){
        this.setState({
            currentPage: event.target.id
        })
    }



    render() {
        const {dataUsers} = this.props;
        const {currentPage, prevPage} = this.state;

        const indexOfLastUser = currentPage * prevPage;
        const indexOfFirstUser = indexOfLastUser - prevPage;
        const currentUsers = dataUsers.slice(indexOfFirstUser, indexOfLastUser);


        const renderUsers  = currentUsers.map(item=>(
           <div key={item.id}>
               <span style={{fontSize:'20px'}}>{item.name} </span>
               <span style={{fontSize:'20px'}}>{item.surname}</span>
               <p>{item.desc}</p>
           </div>
        ));

        let pagesCount = [];

        for (let i = 1; i<= Math.ceil(dataUsers.length / prevPage); i++){
            pagesCount.push(i);
        }

        const renderPageNumbers = pagesCount.map(number =>{
            return(
                <button
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </button>
            )
        });

        return (
            <div>
                <div>
                    {renderUsers}
                </div>
                <div>
                    {renderPageNumbers}
                </div>
            </div>
        );
    }
}

export default MainComponent;
