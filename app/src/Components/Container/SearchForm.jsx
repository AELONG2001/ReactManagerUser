import React, { useState } from 'react';

export default function SearchForm(props) {
  const [temp, setTemp] = useState('')
  const handleChangeInputText = (e) => {
    setTemp(e.target.value)
    props.getTextSearch(temp)
  }

    return (
           <div className="col-12">
                <div className="mb-3">
                    <div className="btn-group">
                      <input
                        onChange={(e) => handleChangeInputText(e)}
                        style={{width: '500px'}}
                        type="text"
                        className="form-control"
                        placeholder="Nhập để tìm kiếm" />
                      <div
                        onClick={() => props.getTextSearch(temp)}
                        className="btn btn-success"
                      >
                        Tìm kiếm
                      </div>
                    </div>
                </div>
                { props.showBtn
                  ? 
                    <div
                    onClick={props.changeBtn}
                    style={{float: 'right', marginRight: 80}}
                    className="btn btn-outline-primary mb-3">Thêm mới</div>

                  : 
                  
                    <div
                    onClick={props.changeBtn}
                    style={{float: 'right', marginRight: 80}}
                    className="btn btn-outline-danger mb-3">Đóng lại</div>
                    }
            </div>
    )  
}