import React, { Component } from "react";
import PropTypes from "prop-types";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      user: null,
    };
  }

  componentDidMount() {
    // https://reqres.in/api/users/2
    console.log("user===", this.props, this.props.id);
    fetch(`https://reqres.in/api/users/${this.props.id}`)
      .then((res) => {
        return res.json();
      })
      .then(
        (_res) => {
          console.log("_ress", !_res);
          this.setState({
            isLoaded: true,
            user: _res.data,
          });
        },
        (error) => {
          console.log("error", error);
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { isLoaded, user } = this.state;
    console.log("user===", this.state, this.props);
    if (isLoaded && !user) {
      this.props.router.push("/");
    }

    if (!isLoaded || !user) {
      return (
        <div className="container">
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ marginTop: "50px" }}
          >
            <h3 className="text-center my-2">LOADING</h3>
            <div className="spinner-border text-muted spinner-border"></div>
          </div>
        </div>
      );
    }
    return (
      <Container className="m-aside scene_element scene_element--fadein">
        <h1 class="text-center mob-mb-xl my-4">
          {`${user.first_name} ${user.last_name}`}
        </h1>

        <div
          className="row container-sm mx-auto d-flex flex-column justify-content-center align-items-center"
          style={{ maxWidth: "720px" }}
        >
          <div className="card user">
            <img
              className="card-img-top"
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
            />
            <Row className="card-body">
              <Col xs={12}>
                <Row className="row">
                  <Col xs={7} sm={5}>
                    <strong className="card-title text-capitalize">
                      first name:
                    </strong>
                  </Col>
                  <Col xs={5} sm={7}>
                    <p className="card-title text-capitalize">
                      {`${user.first_name}`}
                    </p>
                  </Col>
                </Row>
                <Row className="row">
                  <Col xs={7} sm={5}>
                    <strong className="card-title text-capitalize">
                      last name:
                    </strong>
                  </Col>
                  <Col xs={5} sm={7}>
                    <p className="card-title text-capitalize">
                      {`${user.last_name}`}
                    </p>
                  </Col>
                </Row>
                <Row className="row">
                  <Col xs={5}>
                    <strong className="card-title text-capitalize">
                      email:
                    </strong>
                  </Col>
                  <Col xs={7}>
                    <p className="card-title">{`${user.email}`}</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          {/* </div> */}
        </div>
      </Container>
    );
  }
}

ProfileContainer.propTypes = {};

export default ProfileContainer;
