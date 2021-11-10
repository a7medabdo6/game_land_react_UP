import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import {
  Button,
  Container,
  Icon,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from "semantic-ui-react";
import Logo from "../assets/images/logo512.png";
import HeaderImage from "../assets/images/cover.jpg";
import secimage from "../assets/images/cover2.jpg";
import thirdimage from "../assets/images/cover3.jpg";

import Main from "./sections/Mainsection";
import RoadMap from "./sections/Roadmap";
import Team from "./sections/Team";
import Timeline from "./sections/Timeline";
import Footer from "./sections/footer";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const Headerstyle = styled.section``;
const Imgstyle = styled.div`
  background-image: url(${HeaderImage});
  height: 500px;
  display: flex;
  background-size: cover;
`;
const TextStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const H1_title = styled.h2`
  border-bottom: 2px solid red;
  padding-bottom: 15px;
`;
const P_text = styled.div`
  padding-bottom: 15px;
  padding-top: 15px;

  width: 50%;
  line-height: 1.5;
  font-size: 20px;
  text-align: center;
`;
const Discord = styled.div`
  display: flex !important;
  align-items: center;
  padding: 10px 15px;
  width: 200px;
  border-radius: 40px;
  justify-content: space-around;
  display: inline-block;
  margin-top: 5rem;
  margin-bottom: 3rem;
`;
const Roadmap = styled.div`
  display: flex;
  padding-top: 4rem;
  color: black;
  background: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LanchRoad = styled.h3`
  padding: 15px 25px;
  margin-bottom: 20px;
  border: 3px solid red;
  width: auto;
  display: inline-block;
`;
const Precentage = styled.span`
  padding: 10px;
  font-size: 18px;
  color: white;
  background: red;
  border: 1px solid red;
`;
const HomepageHeading = ({ mobile }) => (
  <div text>
    <Headerstyle>
      <Imgstyle>
        <div style={{ width: "200px", textAlign: "center", margin: "auto" }}>
          <img style={{ width: "100%" }} src={Logo} />
        </div>
      </Imgstyle>
    </Headerstyle>
  </div>
);

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Media greaterThan="mobile">
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item position="left">
                  <img src={Logo} />
                </Menu.Item>
                <Menu.Item as="a" active>
                  HOME
                </Menu.Item>
                <Menu.Item as="a">ABOUT US</Menu.Item>
                <Menu.Item as="a">ROADMAP</Menu.Item>
                <Menu.Item as="a">TEAM</Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Media>
    );
  }
}

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Media as={Sidebar.Pushable} at="mobile">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as="a" active>
              Home
            </Menu.Item>
            <Menu.Item as="a">Work</Menu.Item>
            <Menu.Item as="a">Company</Menu.Item>
            <Menu.Item as="a">Careers</Menu.Item>
            <Menu.Item as="a">Log in</Menu.Item>
            <Menu.Item as="a">Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 350, padding: "1em 0em" }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Button as="a" inverted>
                      Log in
                    </Button>
                    <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    );
  }
}

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "4em 0em" }} vertical inverted>
      <TextStyle>
        <div>
          <H1_title>INTRODUCE</H1_title>
        </div>
        <P_text>
          * For large applications it may not be best option to put all page
          into these containers at * they will be rendered twice for SSR. * For
          large applications it may not be best option to put all page into
          these containers at * they will be rendered twice for SSR. * For large
          applications it may not be best option to put all page into these
          containers at * they will be rendered twice for SSR.
        </P_text>
      </TextStyle>
      <Main
        title="THE STORY"
        text="For large applications it may not be best option to put all page
            into these containers at * they will be rendered twice for SSR. *
            For large applications it may not be best option to put all page
            into these containers at * they will be rendered twice for SSR. *
            For large applications it may not be best option to put all page
            into these containers at * they will be rendered twice for SSR."
        image={secimage}
      />
      <Main image={thirdimage} />
      <RoadMap />
      <Timeline />

      <Team />
    </Segment>
    <Footer />
  </ResponsiveContainer>
);

export default HomepageLayout;
