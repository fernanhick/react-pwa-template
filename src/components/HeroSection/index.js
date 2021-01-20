import React, {useState} from 'react';
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContent,
  HeroH1,
  HeroiContainer,
  HeroP,
  VideoBg,
} from './HeroElements';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElement';
const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroiContainer>
      <HeroBg>
        {/* <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg> */}
      </HeroBg>
      <HeroContent>
        <HeroH1>Defi Options Made Easy</HeroH1>
        <HeroP>
          Sign in for a overview of the Dashboard for DeFi options in the market
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="home"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroiContainer>
  );
};

export default HeroSection;
