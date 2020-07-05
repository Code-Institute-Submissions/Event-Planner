import React from 'react';
import '../css/style.css';


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
            console.warn(query);
        };

    render() {
        return (
            <div className="container">
                {/*Heading*/}
                <h2 className="heading">Live Search</h2>
                {/*Search Input*/}
                <label className="search-label" htmlFor="search-input">
                <input 
                    type="text"
                    value=""
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