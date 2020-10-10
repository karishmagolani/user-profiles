import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { withRouter } from "next/router";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      users: [],
      un_sorted: [],
    };
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users?delay=4")
      .then((res) => {
        return res.json();
      })
      .then(
        (_res) => {
          console.log("_ress", _res);
          this.setState({
            isLoaded: true,
            users: _res.data,
            un_sorted: [..._res.data],
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

  onSortBy = (action) => {
    console.log(action);
    const { isLoaded, users, un_sorted } = this.state;
    let sorted = users;

    this.setState(
      {
        isLoaded: false,
      },
      () => {
        console.log("new users", this.state);
        if (action == "first_name") {
          sorted.sort((a, b) => {
            //   return a.first_name - b.first_name;
            var nameA = a.first_name.toUpperCase();
            var nameB = b.first_name.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }

            // names must be equal
            return 0;
          });
        } else if (action == "last_name") {
          sorted.sort((a, b) => {
            //   return a.first_name - b.first_name;
            var nameA = a.last_name.toUpperCase();
            var nameB = b.last_name.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }

            // names must be equal
            return 0;
          });
        } else {
          sorted = [...un_sorted];
        }

        console.log("new users", sorted);
        this.setState({
          users: [...sorted],
          isLoaded: true,
        });
      }
    );
  };

  render() {
    const { isLoaded, users, un_sorted } = this.state;
    const { router } = this.props;
    console.log("this.state", isLoaded, users, un_sorted);
    if (!isLoaded) {
      return (
        <Container>
          <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ marginTop: "50px" }}
          >
            <h3 className="text-center my-2">LOADING</h3>
            <div className="spinner-border text-muted spinner-border"></div>
          </div>
        </Container>
      );
    }
    return (
      <Container>
        <h1 className="text-center mob-mb-xl my-4">USERS</h1>

        <div className="row container-sm mx-auto" style={{ maxWidth: "720px" }}>
          <Col xs={12}>
            <Row style={{ width: "100%", margin: "0px" }}>
              <Col sm={{ offset: 8 }} className="mb-3">
                <Row>
                  <Col
                    xs={6}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <strong>Sort By</strong>
                  </Col>
                  <Col xs={6}>
                    <Dropdown
                      onSelect={(e, v) => {
                        this.onSortBy(e);
                      }}
                    >
                      <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Sort By
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item eventKey="none">None</Dropdown.Item>
                        <Dropdown.Item eventKey="first_name">
                          First Name
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="last_name">
                          Last Name
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>{" "}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>

          {users.map((user, index) => (
            <Col
              //   xs={6}
              sm={4}
              className="d-flex flex-column justify-content-center align-items-center"
              style={{ marginBottom: "35px" }}
              onClick={() => router.push(`/profile/${user.id}`)}
              key={index}
            >
              <div className="card" style={{ width: "12rem" }}>
                <img
                  src={user.avatar}
                  className="card-img-top"
                  alt={`${user.first_name} ${user.last_name}`}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {`${user.first_name} ${user.last_name}`}
                  </h5>
                </div>
              </div>
            </Col>
          ))}
        </div>
      </Container>
    );
  }
}

HomeContainer.propTypes = {};

export default withRouter(HomeContainer);
