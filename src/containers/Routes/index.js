import React from "react";
import { Route, Switch } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import NavbarHeader from "../../components/NavbarHeader";
import SideMenu from "../SideMenu";
import AlertMsg from "../../components/AlertMsg";
import Homepage from "../Homepage";
import GalleryPage from "../GalleryPage";
import NotFoundPage from "../../components/NotFoundPage";

const Routes = () => {
  return (
    <>
      <NavbarHeader />
      <Container fluid>
        <Row>
          <SideMenu />
          <Col md={9} className="d-flex justify-content-center">
            <AlertMsg />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/gallery" component={GalleryPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Routes;
