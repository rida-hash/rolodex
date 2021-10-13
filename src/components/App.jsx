import React, {Component} from "react"
import ReactDOM from "react-dom"
import CardList from "./Card-list"
import {Search} from "./SearchBox"

class App extends Component {
    constructor(){
        super();

        this.state={
            monsters: [],
            searchField: ""
        }
    }

   handleChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then( users => this.setState({ monsters: users}));
    }

    render(){
        const {monsters, searchField} = this.state;
        const filteredMons = monsters.filter(monster=> monster.name.toLowerCase().includes(searchField.toLowerCase()))
        return(
            <div className="App">
                <Search 
                onChange={this.handleChange} />
                <CardList 
                    monsters={filteredMons}
                />
            </div>
        )
    }
}

export default App;