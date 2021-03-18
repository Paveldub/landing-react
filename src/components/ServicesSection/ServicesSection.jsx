import React from "react";
import {
  ServiceContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  SerivcesIcon,
  ServicesH2,
  ServicesP,
  ServicesTextWrapper,
} from "./ServicesSection.styles";

import Icon1 from "../../images/svg-1.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-3.svg";

export const ServicesSection = () => {
  return (
    <>
      <ServiceContainer id="services">
        <ServicesH1>Technologies</ServicesH1>

        <ServicesWrapper>
          <ServicesCard>
            <SerivcesIcon src={Icon1} />
            <ServicesTextWrapper>
              <ServicesH2>Reduce expenses</ServicesH2>
              <ServicesP>We will help you to achieve your milestones</ServicesP>
            </ServicesTextWrapper>
          </ServicesCard>

          <ServicesCard>
            <SerivcesIcon src={Icon2} />
            <ServicesTextWrapper>
              <ServicesH2>Reduce expenses</ServicesH2>
              <ServicesP>We will help you to achieve your milestones</ServicesP>
            </ServicesTextWrapper>
          </ServicesCard>

          <ServicesCard>
            <SerivcesIcon src={Icon3} />
            <ServicesTextWrapper>
              <ServicesH2>Reduce expenses</ServicesH2>
              <ServicesP>We will help you to achieve your milestones</ServicesP>
            </ServicesTextWrapper>
          </ServicesCard>
        </ServicesWrapper>
      </ServiceContainer>
    </>
  );
};
