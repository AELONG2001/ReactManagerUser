import React, { useState } from 'react';

export default function Container(props) {
    const [inputValues, setInputValues] = useState({
        name: '',
        phone_number: '',
        permission : ''
    })
    const handleChangeGetValue  = (e) => {
        const { name, value } = e.target
        setInputValues({
            ...inputValues,
            [name] : value
        })
    }

    return (
        <div
           className = { props.showBtn ? "col mt-5" : "col-3 mt-5" } 
         >
         { !props.showBtn && <div className="card border-primary mb-3" style={{ maxWidth: '18rem' }}>
                <div className="card-header">Add Member</div>
                <div className="mb-3">
                    <div className="form-group mt-3">
                        <input
                        onChange={(e) => handleChangeGetValue(e)}
                        style={{width: '70%', margin: 'auto'}}
                        name="name" 
                        type="text" className="form-control" 
                        placeholder="Nhập tên member" 
                        />
                    </div>

                    <div className="form-group mt-3">
                        <input
                        onChange={(e) => handleChangeGetValue(e)}
                        style={{width: '70%', margin: 'auto'}}
                        name="phone_number" 
                        type="text" className="form-control" 
                        placeholder="Số điện thoại" 
                        />
                    </div>

                    <div className="mb-3 mt-3">
                    <select
                      onChange={(e) => handleChangeGetValue(e)}
                      name="permission"
                      style={{width: '70%', margin: 'auto'}} className="form-control">
                        <option>Chọn quyền</option>
                        <option>Admin</option>
                        <option>User</option>
                    </select>
                    </div>

                    <input
                     onClick={() => props.getNewUser(inputValues.name, inputValues.phone_number, inputValues.permission, inputValues)}
                     style={{ width: '70%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}
                     type="reset"
                     value="Add"
                     className="btn btn-block btn-success"
                    />
                </div>
            </div>}
      </div>
      
    )
}