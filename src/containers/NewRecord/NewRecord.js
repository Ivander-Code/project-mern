/** Dependencies */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Row, Col, Form, Button } from "react-bootstrap";

/** Action Creator */
import { addUser, cleanResponseMessage } from "../../actions/newRecord.action";

/** Components */
import CustomMessage from "../../components/CustomMessage/CustomMessage";

/** CSS File */
import "./NewRecord.css";

/** Container */
const NewRecord = () => {
  const { errors, handleSubmit, register } = useForm();
  const add_user_message = useSelector((state) => state.add_user_message);
  const dispatch = useDispatch();

  function onSubmit(info, event) {
    dispatch(addUser(info.data));
    event.target.reset();
    setTimeout(() => {
      dispatch(cleanResponseMessage());
    }, 3000);
  }

  return (
    <Form
      className="pt-3 pb-5"
      onSubmit={handleSubmit(onSubmit)}
      method="post"
      encType="application/x-www-form-urlencoded"
    >
      <Row className="pb-4">
        <h3 className="mr-auto">New User</h3>
        {add_user_message?.type !== "default" && add_user_message?.type !== undefined ? (
          <Row className="mr-1 ml-auto">
            <CustomMessage {...add_user_message} />
          </Row>
        ) : (
          <></>
        )}
      </Row>
      <Row className="border rounded p-3">
        <Col md={6}>
          <Form.Group>
            <Form.Label htmlFor="nombre">Name:</Form.Label>
            <Form.Control
              type="text"
              data-name="nombre"
              name="data[nombre]"
              placeholder="Enter the name"
              ref={register({ required: true })}
            />
            {errors?.data?.nombre?.type === "required" && (
              <span className="text-danger">This field is required</span>
            )}
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label htmlFor="apellido1">Last Name:</Form.Label>
            <Form.Control
              data-require="true"
              data-name="apellido1"
              type="text"
              name="data[apellido1]"
              placeholder="Enter Last Name"
              ref={register({ required: true })}
            />
            {errors?.data?.apellido1?.type === "required" && (
              <span className="text-danger">This field is required</span>
            )}
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label htmlFor="apellido2">Second Last Name:</Form.Label>
            <Form.Control
              type="text"
              data-name="apellido2"
              name="data[apellido2]"
              placeholder="Enter second last name"
              ref={register({ required: true })}
            />
            {errors?.data?.apellido2?.type === "required" && (
              <span className="text-danger">This field is required</span>
            )}
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label htmlFor="age">Age:</Form.Label>
            <Form.Control
              type="text"
              data-name="age"
              name="data[age]"
              placeholder="Enter Age"
              ref={register({ required: true })}
            />
            {errors?.data?.age?.type === "required" && (
              <span className="text-danger">This field is required</span>
            )}
          </Form.Group>
        </Col>
        <Col md={6}>
          <Button type="submit" variant="success" value="Send">
            Send
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
export default NewRecord;
