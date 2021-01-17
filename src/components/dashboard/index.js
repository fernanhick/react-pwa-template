import React from 'react';
import {
  DashboardContainer,
  DashboardItem,
  CardsContainer,
} from './DashboardElements';
import RecipeReviewCard, {Cards} from './widgets/Cards';
import {CardsCopy} from './widgets/CardsCopy';
const Dashboard = () => {
  return (
    <DashboardContainer>
      <CardsContainer>
        <Cards />
        <CardsCopy />
      </CardsContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
