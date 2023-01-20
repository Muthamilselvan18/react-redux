import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "./Components/UpdateTask";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTask } from "./Slice/taskSlice";
import { removeFromList } from "./Slice/taskSlice";

function Tasklist() {
  const [modalShow, setModalShow] = useState(false);
  const { tasksList } = useSelector((state) => state.task);
  const dispatch = useDispatch();

  const updateTask = (task) => {
    setModalShow(true);
    dispatch(setSelectedTask(task));
  };
  const deleteTask = (task) => {
    dispatch(removeFromList(task));
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasksList &&
            tasksList.map((task, index) => {
              return (
                <tr className="text-center" key={task.id}>
                  <td>{index + 1}</td>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>
                    <Button
                      variant="primary"
                      className="mx-3"
                      onClick={() => updateTask(task)}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </Button>
                    <Button variant="primary" onClick={() => deleteTask(task)}>
                      <i className="bi bi-trash3"></i>
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Tasklist;
