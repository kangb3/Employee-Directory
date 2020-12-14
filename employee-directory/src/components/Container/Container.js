import React, { Component } from "react";
import API from "../../utils/API";
import TableInfo from "../DataTable/DataTable";
import SearchBox from "../SearchBox/SearchBox";



class Container extends Component{
    state = {
        employees: [],
        filterEmployees :[],
        search: "",
        order: ""
    };

    
    componentDidMount(){
        API.getUsers()
        .then((res) =>
        this.setState({

            filterEmployees: res.data.results,
            employees: res.data.results
            
        })
        )
        .catch((err) => console.log(err));
    }

    sortName = () => {
        var filter = this.state.filterEmployees;
        if(this.state.order === "asc"){
            var sort = filter.sort((a, b) => 
            a.name.first > b.name.first ? 1 : -1
            );


            this.setState({
                filterEmployees: sort,
                order: "asc",
            });
        }
    };

    handleInput = (event) => {

        var employees = this.state.employees;

        var userInput = event.target.value;

        var filterEmployees = employees.filter(
            (employee) =>
            employee.name.first.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
        this.setState({
            filterEmployees
        });

    }

    employeeSearch = () => {
        API.getUsers()
          .then((res) =>
            this.setState({
              filterEmployees: res.data.results,
              employees: res.data.results,
            })
          )
          .catch((err) => console.log(err));
      };


      handleSearch = (event) => {
        event.preventDefault();
        if (!this.state.search) {
          alert("Please enter an employee name");
        }
        const { employees, search } = this.state;
    
        const filterEmployees = employees.filter((employee) =>
          employee.name.first.toLowerCase().includes(search.toLowerCase())
        );
    
        this.setState({
          filterEmployees,
        });
      };


      render() {
        return (
          <div>
            <SearchBox
              employees = {this.state.employees}
              handleSearch = {this.handleSearch}
              handleInput = {this.handleInput}
            />


    
            <TableInfo
              results = { this.state.filterEmployees}
              sortName = {this.sortByName}
            />
          </div>
        );
      }

}


export default Container;