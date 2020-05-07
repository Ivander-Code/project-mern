/** Dependencies */
import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";

/** Component */
import CustomMessage from "../../components/CustomMessage/CustomMessage";

/** CSS File */
import "./AllRecords.css";

/** Container */
const AllRecords = () => {
  const users = useSelector((state) => state.users);
  const load_user_message = useSelector((state) => state.load_user_message);

  return (
    <>
      {load_user_message.type === "success" ? (
        <div className="pt-3 pb-5">
          <Row className="d-flex justify-content-start border-bottom pb-4">
            <h3>
              Users <span className="small text-muted">example list</span>
            </h3>
          </Row>
          <Row className="text-dark text-center p-1 font-weight-bolder">
            <Col xs={3}>Name</Col>
            <Col xs={3}>Last Name</Col>
            <Col xs={3}>Second Last Name</Col>
            <Col xs={3}>Age</Col>
          </Row>
          {users.map((user, index) => {
            let style = index % 2 ? "" : "bg-light";
            return (
              <Row
                className={`${style} text-center p-1 border-top border-bottom`}
                key={index}
              >
                <Col xs={3} className="small">
                  {user.nombre}
                </Col>
                <Col xs={3} className="small">
                  {user.apellido1}
                </Col>
                <Col xs={3} className="small">
                  {user.apellido2}
                </Col>
                <Col xs={3} className="small">
                  {user.age}
                </Col>
              </Row>
            );
          })}
        </div>
      ) : (
        <CustomMessage {...load_user_message} />
      )}
    </>
  );
};
export default AllRecords;
