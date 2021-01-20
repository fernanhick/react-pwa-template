import React, {useState} from 'react';
import {ButtonR} from '../ButtonElement';
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContent,
  HeroH1,
  HeroiContainer,
  HeroP,
} from './HeroElements';
const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroiContainer id="home">
      <HeroBg>
        {/* <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg> */}
      </HeroBg>
      <HeroContent>
        <HeroH1>Defi Options Made Easy</HeroH1>
        <HeroP>
          Sign in for a overview of the Dashboard for DeFi services in the
          market
        </HeroP>
        <HeroBtnWrapper>
          <ButtonR
            to="/app"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonR>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroiContainer>
  );
};

export default HeroSection;
