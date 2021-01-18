import styled from 'styled-components';

export const ServicesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 800px;
  background: linear-gradient(180deg, var(--light-bg) 0%, var(--primary) 100%);
  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    paddin: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: var(--light-bg);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  /* This makes the cards to pop out */
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  color: var(--dark-text);
  margin-bottom: 64px;
  font-size: 2.5rem;

  @media screen and (max-height: 480px) {
    font-size: 2rem;
  }
`;
export const ServicesH2 = styled.h2`
  margin-bottom: 10px;
  font-size: 1rem;
`;
export const ServicesP = styled.p`
  text-align: center;
  font-size: 1rem;
`;
