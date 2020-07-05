import React from 'react';
import '../css/style.css';
import axios from 'axios';

document.getElementById("search");

class Search extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                query: '',
                results: {},
                loading: false,
                message: '',
            }
        }

        handleOnInputChange = (event) => {
            const query = event.target.value;
            this.setState( state= {query:query, loading: true, message: ""} );
        };

    render() {
        const {query}=this.state;
        console.log(this.state);
        return (
            <div className="container">
                {/*Heading*/}
                <h2 className="heading">Live Search</h2>
                {/*Search Input*/}
                <label className="search-label" htmlFor="search-input">
                <input 
                    type="text"
                    name="query"
                    value={query}
                    id="search-input"
                    placeholder="Search..."
                    onChange={this.handleOnInputChange}
                />
                
                
                </label>
            </div>
        )
    }
}
export default Search