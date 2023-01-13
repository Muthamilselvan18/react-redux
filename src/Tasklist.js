import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Tasklist() {

const updateTask = () =>{
    console.log("Update task");
}
 const deleteTask = () =>{
    console.log("Delete Task");
 }

  return (
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
  )
}

export default Tasklist