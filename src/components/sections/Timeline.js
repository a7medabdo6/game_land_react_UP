import React, { Fragment } from "react";
import first_image from "../../assets/images/timeline/8.png";
import sec_image from "../../assets/images/timeline/4.png";
import third_image from "../../assets/images/timeline/Halo.png";
import forth_image from "../../assets/images/timeline/7.png";
import styled from "styled-components";

const TextStyle = styled.div`
  display: flex;
  padding: 50px 0px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const H1_title = styled.h2`
  border-bottom: 2px solid red;
  padding-bottom: 15px;
`;
import TimelineItem from "./items/TimelineItem";
function Timeline() {
  return (
    <Fragment>
      <TextStyle>
        <div>
          <H1_title>POST ROADMAP</H1_title>
        </div>
      </TextStyle>
      <div className="timeline">
        <TimelineItem
          position="right"
          image={first_image}
          title="Lorem ipsum"
          sec_title="Lorem ipsum dolor sit amet
"
          text="  Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
erat sagittis non. Ut blandit semper pretium.psum dolor sit amet elit. Aliquam odio dolor, id luctus
erat sagittis non. Ut blandit semper pretium."
        />
        <TimelineItem
          position="left"
          image={sec_image}
          title="Lorem ipsum"
          sec_title="Lorem ipsum dolor sit amet
"
          text="  Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
erat sagittis non. Ut blandit semper pretium.psum dolor sit amet elit. Aliquam odio dolor, id luctus
erat sagittis non. Ut blandit semper pretium."
        />
        <TimelineItem
          position="right"
          image={third_image}
          title="Lorem ipsum"
          sec_title="Lorem ipsum dolor sit amet
"
          text="  Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
erat sagittis non. Ut blandit semper pretium.psum dolor sit amet elit. Aliquam odio dolor, id luctus
erat sagittis non. Ut blandit semper pretium."
        />
        <TimelineItem
          position="left"
          image={forth_image}
          title="Lorem ipsum"
          sec_title="Lorem ipsum dolor sit amet
"
          text="  Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
erat sagittis non. Ut blandit semper pretium.psum dolor sit amet elit. Aliquam odio dolor, id luctus
erat sagittis non. Ut blandit semper pretium."
        />
      </div>
    </Fragment>
  );
}

export default Timeline;
