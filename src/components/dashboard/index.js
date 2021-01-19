import React from 'react';
import {
  DashboardContainer,
  DashboardItem,
  CardsContainer,
} from './DashboardElements';
import RecipeReviewCard, {Cards} from './Cards';
const Dashboard1 = () => {
  return (
    <DashboardContainer>
      <CardsContainer>
        <Cards />
      </CardsContainer>
    </DashboardContainer>
  );
};

export default Dashboard1;
