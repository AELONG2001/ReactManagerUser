import React from 'react';

export default function TableData(props) {
  const editUserClick = () => {
    props.editUser()
    props.handleShowHideEditBtn()
  }

  const removeUserClick = (idUser) => {
   props.removeUserWhenClick(idUser)
  }

  return (
       <tr>
            <td>{props.stt+1}</td>
            <td>{props.name}</td>
            <td>{props.phone_number}</td>
            <td>{props.permission}</td>
            <td>
                <div className="btn-group">
                    <div
                      onClick={editUserClick}
                      className="btn btn-warning"
                    >
                    <i className="fas fa-edit"></i>
                        Sửa
                    </div>

                    <div
                      onClick={() => {removeUserClick(props.id)}} 
                      className="btn btn-danger"
                    >
                    <i className="fas fa-minus-circle"></i>
                    Xóa
                </div>
                </div>
            </td>
        </tr>
  );
}
