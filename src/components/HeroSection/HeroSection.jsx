import React, { useState } from 'react';
import Video from '../../video/video.mp4';

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  Button,
  ArrowRight,
  ArrowForward,
} from './HeroSection.styles';

export const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>Why React is awesome?</HeroH1>
          <HeroP>Try it</HeroP>
          <HeroBtnWrapper>
            <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
              Get started
              {' '}
              {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};
