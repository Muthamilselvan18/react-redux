import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from './Components/UpdateTask';

function Tasklist() {

  const [modalShow,setModalShow] = useState (false)

const updateTask = () =>{
    console.log("Update task");
    setModalShow(true)
}
 const deleteTask = () =>{
    console.log("Delete Task");
 }

  return (
    <>
    <Table striped bordered hover>
    <thead>
      <tr className='text-center'>
        <th>#</th>
        <th>Title</th>
        <th>Description</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr className='text-center'>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td><Button variant="primary" className='mx-3' onClick={()=>updateTask()}><i className="bi bi-pencil-square"></i></Button>
            <Button variant="primary"  onClick={()=>deleteTask()}><i className="bi bi-trash3"></i></Button></td>
      </tr>
    </tbody>
  </Table>
    <MyVerticallyCenteredModal
    show={modalShow}
    onHide={() => setModalShow(false)}
  />
  </>
  )
}

export default Tasklist