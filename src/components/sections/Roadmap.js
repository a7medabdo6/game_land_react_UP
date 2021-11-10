import React from "react";
import styled from "styled-components";

const Roadmap = styled.div`
  display: flex;
  padding-top: 4rem;
  padding-bottom: 4rem;
  color: black;
  background: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Montserrat-Regular !important;
  letter-spacing: 2px;
  font-size: 16px; ;
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
function RoadMap() {
  return (
    <Roadmap>
      <LanchRoad>LAUNCH ROADMAP</LanchRoad>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "15px 0px",
          justifyContent: "space-between",
        }}
      >
        <Precentage>15%</Precentage>
        <p style={{ width: "85%" }}>
          * For large applications it may not be best option to put all page
          into these containers at * they will be rendered twice for SSR. *
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "15px 0px",
          justifyContent: "space-between",
        }}
      >
        <Precentage>15%</Precentage>
        <p style={{ width: "85%" }}>
          * For large applications it may not be best option to put all page
          into these containers at * they will be rendered twice for SSR. *
        </p>
      </div>{" "}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "15px 0px",
          justifyContent: "space-between",
        }}
      >
        <Precentage>15%</Precentage>
        <p style={{ width: "85%" }}>
          * For large applications it may not be best option to put all page
          into these containers at * they will be rendered twice for SSR. *
        </p>
      </div>{" "}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "15px 0px",
          justifyContent: "space-between",
        }}
      >
        <Precentage>15%</Precentage>
        <p style={{ width: "85%" }}>
          * For large applications it may not be best option to put all page
          into these containers at * they will be rendered twice for SSR. *
        </p>
      </div>{" "}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "15px 0px",
          justifyContent: "space-between",
        }}
      >
        <Precentage>15%</Precentage>
        <p style={{ width: "85%" }}>
          * For large applications it may not be best option to put all page
          into these containers at * they will be rendered twice for SSR. *
        </p>
      </div>{" "}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "15px 0px",
          justifyContent: "space-between",
        }}
      >
        <Precentage>15%</Precentage>
        <p style={{ width: "85%" }}>
          * For large applications it may not be best option to put all page
          into these containers at * they will be rendered twice for SSR. *
        </p>
      </div>
    </Roadmap>
  );
}

export default RoadMap;
