import React from 'react'
import pt from "prop-types";
import "../css/student.css"
export default function Student(props) {
  return (
    <div className='table'>
        <table>
            <tbody>
            <tr>
            <th>Name</th>
            <td>{props.name}</td>
            </tr>
            <tr>
            <th>Age</th>
            <td>{props.age}</td>
            </tr>
            <tr>
            <th>Standard</th>
            <td>{props.standard}</td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

Student.propTypes={
    name:pt.string,
    age:pt.number,
    standard:pt.number
}
Student.defaultProps={
    age:0,
    standard:10

}
