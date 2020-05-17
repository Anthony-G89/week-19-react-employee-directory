import React from "react";
import API from "./utils/API";

class App extends React.Component {
    state = {
        search: "",
        employees: []
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
    handleSearch = () => {
        const [employeeState, setemployeeState] = useState({
            employees: "",
          });
    }

    

    

componentDidMount() {
    API.getRandomPerson()
        .then(res => {
            console.log({ res });
            this.setState({ employees: res.data.results })
        })
}


render() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container" >
                <h1 className="display-4" className="text-center">Employee Directory</h1>
                <p className="lead" className="text-center">Click on the carrots to filter by heading or use the search box to narrow your results .</p>
            </div>

            <form className="searchEmployee">
                <div className="form-group" className="text-center pb-3">
                    <input
                        //   value={}
                        //   onChange={}
                        name="term"
                        list="term"
                        type="text"
                        placeholder="Search for an employee"
                        id="searchBox"
                    />
                </div>
            </form>


            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            {
                                this.headings.map(heading => (
                                    <th scope="col" key={heading.name} onClick={() => this.handleSort(heading.name)}>{heading.name}</th>
                                ))
                            }
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


export default App;





// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
