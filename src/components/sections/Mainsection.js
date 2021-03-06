import React from "react";
import styled from "styled-components";

import descord from "../../assets/images/discord.png";

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
  width: 50%;
  line-height: 1.5;
  font-size: 20px;
  text-align: center;
`;
const Discord = styled.div`
  display: flex !important;
  align-items: center;
  padding: 30px 15px;
  width: 200px;
  border-radius: 40px;
  justify-content: space-around;
  display: inline-block;
  margin-top: 5rem;
  margin-bottom: 3rem;
`;

function Main({ title, text, image }) {
  return (
    <section style={{ padding: "6rem 0rem 0rem 0rem", position: "relative" }}>
      <div
        style={{
          position: "relative",
          justifyContent: "center",
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img style={{ height: "400px", width: "100%" }} src={image} />
        <Discord>
          <img style={{ width: "100%" }} src={descord} />
        </Discord>
        {text || title ? (
          <TextStyle>
            <div>
              <H1_title>{title}</H1_title>
            </div>

            <P_text>{text}</P_text>
          </TextStyle>
        ) : null}
      </div>
    </section>
  );
}

export default Main;
