import React from 'react'
import TableData from './TableData'

export default function Table(props) {
    const removeUserWhenClick = (idUser) => {
        props.removeUserWhenClick(idUser)
    }
    return (
        <div
          className = { props.showBtn ? "col-12" : "col-9" } 
        >
           <table className="table">
                <thead className="thead-inverse|thead-default">
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Permission</th>
                        <th>Active</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            props.data.map((value, index) => (
                                <TableData
                                  id={value.id}
                                  key={index}
                                  stt={index}
                                  name={value.name}
                                  phone_number={value.phone_number}
                                  permission={value.permission}
                                  handleShowHideEditBtn = {() => props.handleShowHideEditBtn()}
                                  editUser = { () => {props.editUser(value)} }
                                  removeUserWhenClick = {(idUser) => removeUserWhenClick(idUser)}
                                />
                            ))
                        }
                    </tbody>
            </table>
        </div>
    )
}