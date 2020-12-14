import React from "react";
//import Moment from "react-moment";
import "./DataTable.css";


export default function DataTable(props){
    return(
        <>
            <table className = "employeeTable">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th onClick={props.sortName}>Name</th>
                        <th>Age</th>
                        <th>Phone</th>
                        <th>E-mail</th>
                    </tr>
                </thead>


        <tbody className="tableBody">
          {props.results.map((result) => (

            <tr className="table" key={result.login.uuid}>
              <td>
                <img
                  className="avatar"
                  src={result.picture.medium}
                  alt={result.name + " " + result.name.last}
                />
              </td>

              <td>{result.name.first + " " + result.name.last} </td>

              <td>{result.dob.age}</td>

              <td>{result.cell}</td>

              <td className="email">


                <a href={result.email}>{result.email}</a>
              </td>
              
            </tr>
          ))}
        </tbody>
            </table>
        </>
    )
}