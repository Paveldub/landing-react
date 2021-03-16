import React from 'react'
import Video from '../../video/video.mp4';
import { HeroContainer, HeroBg, VideoBg } from './HeroSection.styles';

export const HeroSection = () => {
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg
            autoPlay
            loop
            muted
            src={Video}
            type='video/mp4' />
        </HeroBg>
      </HeroContainer>
    </>
  )
}