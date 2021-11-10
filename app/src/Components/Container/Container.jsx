import React, { useState, useEffect } from 'react'
import SearchForm from './SearchForm'
import Table from './Table/Table'
import AddUser from './AddUser'
import EditUser from '../EditUser/EditUser'
import data from '../Data.json'
import { v4 as uuidv4 } from 'uuid';

export default function Container() {    
    //save data in state
    const [dataValues, setDataValues] = useState([])

   useEffect(() => {
        if(localStorage.getItem('User') === null) {
            localStorage.setItem('User', JSON.stringify(data));
        }else {
            let temp = JSON.parse(localStorage.getItem('User'));
            setDataValues(temp)
        }
   }, [])
    

    const [changeBtn, setChangeBtn] = useState(true)
    const handleChangeBtn = () => {
        setChangeBtn(!changeBtn)
    }
    
    const [textValue, setTextValue] = useState('')
    const getTextSearch = (dl) => {
        setTextValue(dl)
        // Check value input => render value table follow input
        let getData = dataValues.filter((value) => value.name.indexOf(textValue) !== -1)
        setDataValues(getData)
       localStorage.setItem('User', JSON.stringify(getData));
    }


    const getNewUser = (name, phone_number, permission, inputValue) => {
        let obj = {}
        obj.id = uuidv4()
        obj.name = name
        obj.phone_number = phone_number
        obj.permission = permission
        
        let items = dataValues
        items.push(obj)
        setDataValues(items)
        setChangeBtn(true)

        inputValue.name = ''
        inputValue.phone_number = ''
        inputValue.permission = ''


    }



    //state for logic edit user
    const [editUserStatus, setEditUserStatus] = useState(false)

    //function handle show/hide edit button
    const handleShowHideEditBtn = () => {
        setEditUserStatus(!editUserStatus)
    }

    //get value when click on edit button in table
    const [userObj, setUserObj] = useState({})
    const editUser = (user) => {
        setUserObj(user)
    }

    const getDataFromEditUser = (info) => {
        dataValues.forEach(value => {
            if(value.id === info.id) {
                value.name = info.name
                value.phone_number = info.phone_number
                value.permission = info.permission
            }
        })
       localStorage.setItem('User', JSON.stringify(dataValues));
    }

    //logic remove user when click remove Btn
    const removeUserWhenClick = (idUser) => {
       let tempData = dataValues.filter(value => value.id !== idUser)
       setDataValues(tempData)
       localStorage.setItem('User', JSON.stringify(tempData));
    }

    return (
        <div className="container mt-4" style={{ height: 650 }}>
           <div className="row">
               <SearchForm
                 getTextSearch = { (dl) => getTextSearch(dl) }
                 showBtn = { changeBtn }
                 changeBtn = { handleChangeBtn } 
                />

               <hr />

               <EditUser
                 editUserStatus = { editUserStatus }
                 handleShowHideEditBtn = { () => {handleShowHideEditBtn()} }
                 editUser = { (user) => { editUser(user)} }
                 userObj = { userObj }
                 getDataFromEditUser = { (info) => {getDataFromEditUser(info)} }
                 
               />

               <Table
                 showBtn = { changeBtn }
                 handleShowHideEditBtn = { () => {handleShowHideEditBtn()} }
                 editUser = { (user) => { editUser(user)} }
                 data = { dataValues }
                 removeUserWhenClick = { (idUser) => {removeUserWhenClick(idUser)} }
                />

               <AddUser
                 showBtn = { changeBtn }
                 changeBtn = { handleChangeBtn } 
                 getNewUser = { (name, phone_number, permission, inputValue) => getNewUser(name, phone_number, permission, inputValue) }
               />
           </div>
        </div>
    )
}