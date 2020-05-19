import React from "react";
import API from "./utils/API";

class App extends React.Component {
    state = {
        search: "",
        employees: [],
        allEmployees: []
    }

    headings = [
        { name: "Profile" },
        { name: "Name" },
        { name: "Email" },
        { name: "Phone" },
        { name: "DOB" }
    ];

    handleSort = (heading) => {
        console.log({ heading });

        if (heading === 'Name') {
            const sortedEmployees = this.state.employees.sort(function (a, b) {
                var nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
                var nameB = b.name.first.toUpperCase(); // ignore upper and lowercase

                if (nameA < nameB) {
                    return -1;
                }

                if (nameA > nameB) {
                    return 1;
                }

                return 0;
            });

            this.setState({ employees: sortedEmployees });
        }
    }

    // TODO: Implement the logic in this method to filter the employees array.
    handleSearch = (event) => {
        console.log({ searchTerms: event.target.value });
        console.log(this.state.employees);

        const searchTerms = event.target.value.toLowerCase();

        const filteredEmployees = this.state.allEmployees.filter(
            user => `${user.name.first}${user.name.last}${user.email} `.toLowerCase().includes(searchTerms)

        );
        console.log(filteredEmployees)

            this.setState({employees: filteredEmployees});
    }

    componentDidMount() {
        API.getRandomPerson()
            .then(res => {
                console.log({ res });
                this.setState({
                     employees: res.data.results,
                     allEmployees: res.data.results
                    })
            })
    }

    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">Employee Directory</h1>
                    <p className="lead text-center">Click on the carrots to filter by heading or use the search box to narrow your results .</p>

                    <div className="row justify-content-center mb-4">
                        <div className="col-sm-6">
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Search"
                                onChange={this.handleSearch}
                            />
                        </div>
                    </div>
                </div>


                <div className="container">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                {
                                    this.headings.map(heading => (
                                        <th scope="col" key={heading.name} onClick={() => this.handleSort(heading.name)}>{heading.name}</th>
                                    ))
                                },

                            </tr>
                        </thead>
                        <tbody>

                            {
                                this.state.employees.map(employee => {
                                    return (
                                        <tr key={employee.id.value}>
                                            <td>
                                                <img src={employee.picture.thumbnail} alt="employee" />
                                            </td>
                                            <td>{`${employee.name.first} ${employee.name.last}`}</td>
                                            <td>{employee.email}</td>
                                            <td>{employee.phone}</td>
                                            <td>{employee.dob.date}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}

export default App;

