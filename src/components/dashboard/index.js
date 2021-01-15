import { gql, HttpLink, InMemoryCache, useQuery } from "@apollo/react-hooks";
import ApolloClient from "apollo-client";
import React from "react";
import { DashboardContainer, DashboardItem } from "./DashboardElements";
import RecipeReviewCard, { Cards } from "./widgets/Cards";

const Dashboard = () => {
  return (
    <Dashboard>
      <DashboardContainer>
        <DashboardItem />
        <Cards />
      </DashboardContainer>
    </Dashboard>
  );
};

export default Dashboard;
