import React from "react";
import { Grid, Header } from "semantic-ui-react";
import styled from "styled-components";
import person1 from "../../assets/images/team/12.jpg";
import person2 from "../../assets/images/team/11.jpg";
import person3 from "../../assets/images/team/10.jpg";

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
import Team_Person from "./items/Team_Person";
function Team() {
  return (
    <div className="mt-5">
      <TextStyle>
        <div>
          <H1_title>THE TEAM</H1_title>
        </div>
      </TextStyle>
      <Grid columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Team_Person
            image={person1}
            title="Lorem Ipsum is"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />
          <Team_Person
            image={person2}
            title="Lorem Ipsum is"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />
          <Team_Person
            image={person3}
            title="Lorem Ipsum is"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Team;
