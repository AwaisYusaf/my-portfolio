import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          The purpose of this web app is to showcase my technical skills,
          technologies i am using as well as my previous projects to my clients.
        </SectionText>
        <Button>
          <a href="#about" style={{ color: "white" }}>
            Learn More
          </a>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
