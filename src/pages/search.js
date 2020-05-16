import React, { Component } from "react";
import API from "../utils/API";


class Search extends Component {
    state = {
        search: "",
        person: [{}]
    }

    heading = [
        {
            name: "name", width: "10%"


        },
        {
            name: "image", width: "10%"


        },
        {
            name: "email", width: "10%"


        },
        {
            name: "phone", width: "10%"


        },
        {
            name: "DOB", width: "10%"


        }
    ]

    componentDidMount(){
        API.getRandomPerson()
        .then(res => this.setState({person: res.data.res}))
    }

    render(){
        return(
            <div>
                {this.heading}





            </div>
        )

    }


};

export default Search;
