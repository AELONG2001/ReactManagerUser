import React, { useState } from 'react';


export default function EditUser(props) {
  const [userDataChange, setUserDataChange] = useState('')

  const handleChangeEditBtn = (e) => {
    const { name, value } = e.target
    setUserDataChange({
      ...userDataChange,
      [name] : value,
      id: props.userObj.id
    })
  }

  
  const saveDataEditBtn = () => {
    props.handleShowHideEditBtn()
    props.getDataFromEditUser(userDataChange)
  }
  return (
     <div className="div">
        { props.editUserStatus && <div className="card border-primary mb-5" style={{ padding: 0 }}>
                <div className="card-header">Edit Member</div>
                <div className="mb-3">
                    <div className="form-group mt-3">
                        <input
                          onChange={(e) => {handleChangeEditBtn(e)}}
                          defaultValue={props.userObj.name}
                          style={{width: '70%', margin: 'auto'}}
                          name="name" 
                          type="text" className="form-control" 
                          placeholder="Nhập tên member" 
                        />
                    </div>

                    <div className="form-group mt-3">
                        <input
                          onChange={(e) => {handleChangeEditBtn(e)}}
                          defaultValue={props.userObj.phone_number}
                          style={{width: '70%', margin: 'auto'}}
                          name="phone_number" 
                          type="text" className="form-control" 
                          placeholder="Số điện thoại" 
                        />
                    </div>

                    <div className="mb-3 mt-3">
                    <select
                      onChange={(e) => {handleChangeEditBtn(e)}}
                      defaultValue={props.userObj.permission}
                      name="permission"
                      style={{width: '70%', margin: 'auto'}} className="form-control">
                        <option>Chọn quyền</option>
                        <option>Admin</option>
                        <option>User</option>
                    </select>
                    </div>

                    <button
                     onClick={ () => {saveDataEditBtn()} }
                     style={{ width: '70%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}
                     className="btn btn-block btn-success"
                    >
                    Save
                    </button>
                </div>
       </div> }
     </div>
  )
}
