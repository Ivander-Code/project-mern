/** Dependencies */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Form, Button } from "react-bootstrap";

/** Components */
import CustomMessage from "../../components/CustomMessage/CustomMessage";

/** Helper */
import formatData from "../../helpers/formatData";

/** Action Creator */
import {
  updateUser,
  removeUser,
  cleanResponseMessage,
} from "../../actions/editRecord.action";

/** CSS File */
import "./EditRecord.css";

/** Container */
const EditRecord = () => {
  const users = useSelector((state) => state.users);
  const edit_user_message = useSelector((state) => state.edit_user_message);
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    event.persist();
    let form = document.querySelector("#form_" + event.target.id);
    let data;

    switch (event.target.name) {
      case "delete":
        data = { _id: form.querySelector("input[name='data[_id]']").value };
        dispatch(removeUser(data));
        break;
      case "update":
        data = formatData("json", form.querySelectorAll("input[name^='data[']"));
        dispatch(updateUser(data));
        break;
      default:
        break;
    }
    setTimeout(() => {
      dispatch(cleanResponseMessage());
    }, 3000);
  }

  function handleDinamicClick() {
    document.querySelector("#content_update").addEventListener("click", (event) => {
      if (event.target.tagName === "LABEL") {
        event.target.style.display = "none";
        event.target.nextSibling.setAttribute("type", "text");
        event.target.nextSibling.classList.add("form-control-sm");
        event.target.nextSibling.focus();
        event.target.nextSibling.select();
        event.target.nextSibling.onblur = () => {
          event.target.nextSibling.setAttribute("type", "hidden");
          event.target.textContent = event.target.nextSibling.value;
          event.target.style.display = "block";
        };
      }
    });
  }

  useEffect(() => {
    handleDinamicClick();
  }, []);

  return (
    <>
      <div className="pt-3 pb-5" id="content_update">
        <Row className="pb-4">
          <h3>
            Edit and Delete Users <span className="small text-muted">example list</span>
          </h3>
          <Row className="mr-1 ml-auto">
            <CustomMessage {...edit_user_message} />
          </Row>
        </Row>
        <Row className="d-flex text-dark text-center font-weight-bolder border-top p-1">
          <Col xs={2} className="align-self-center">
            Name
          </Col>
          <Col xs={3} className="align-self-center">
            Last Name
          </Col>
          <Col xs={3} className="align-self-center">
            Second Last Name
          </Col>
          <Col xs={2} className="align-self-center">
            Age
          </Col>
          <Col xs={2} className="text-sm-center">
            Actions
          </Col>
        </Row>
        {users.map((user, index) => {
          let style = index % 2 ? "" : "bg-light";
          return (
            <Form key={index} id={`form_${index}`}>
              <input
                type="hidden"
                name="data[_id]"
                data-name="_id"
                defaultValue={user._id}
              />
              <Row className={`${style} text-center`}>
                <Col xs={2} className="border-top border-bottom d-flex">
                  <Form.Label column="true" className="small align-self-center p-0 m-0">
                    {user.nombre}
                  </Form.Label>
                  <input
                    name="data[nombre]"
                    data-name="nombre"
                    type="hidden"
                    className="form-control align-self-center"
                    defaultValue={user.nombre}
                  ></input>
                </Col>
                <Col xs={3} className="border-top border-bottom d-flex">
                  <Form.Label column="true" className="small p-0 m-0 align-self-center">
                    {user.apellido1}
                  </Form.Label>
                  <input
                    name="data[apellido1]"
                    data-name="apellido1"
                    type="hidden"
                    className="form-control align-self-center"
                    defaultValue={user.apellido1}
                  ></input>
                </Col>
                <Col xs={3} className="border-top border-bottom d-flex">
                  <Form.Label column="true" className="small p-0 m-0 align-self-center">
                    {user.apellido2}
                  </Form.Label>
                  <input
                    name="data[apellido2]"
                    data-name="apellido2"
                    type="hidden"
                    className="form-control align-self-center"
                    defaultValue={user.apellido2}
                  ></input>
                </Col>
                <Col xs={2} className="border-top border-bottom d-flex">
                  <Form.Label column="true" className="small p-0 m-0 align-self-center">
                    {user.age}
                  </Form.Label>
                  <input
                    name="data[age]"
                    data-name="age"
                    type="hidden"
                    className="form-control align-self-center"
                    defaultValue={user.age}
                  ></input>
                </Col>
                <Col xs={2} className="border-top border-bottom">
                  <Row>
                    <Col xs={12}>
                      <Button
                        variant="link"
                        id={index}
                        name="update"
                        onClick={handleSubmit}
                      >
                        <span>✓</span> update
                      </Button>
                    </Col>
                    <Col xs={12}>
                      <Button
                        variant="link"
                        id={index}
                        name="delete"
                        onClick={handleSubmit}
                      >
                        <span> X </span> delete
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          );
        })}
      </div>
    </>
  );
};
export default EditRecord;