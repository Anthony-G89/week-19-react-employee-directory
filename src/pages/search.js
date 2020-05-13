import React, { Component } from "react";
import API from "../utils/api";


class Search extends Component {
    state = {
        search: "",
        image: [],
        name: [],
        phone: [],
        email: [],
        DOB: []
    }

    // componentDidMount(){
    //     API.getRandomPerson()
    //     .then(res => this.setState({image: res.data.me}))
    // }
}
