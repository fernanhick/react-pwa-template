import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { render } from "react-dom";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { gql, useQuery } from "@apollo/react-hooks";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2",
  }),
  fetchOptions: {
    mode: "no-cors",
  },
  cache: new InMemoryCache(),
});

const DAI_QUERY = gql`
  query tokens($tokenAddress: Bytes!) {
    tokens(where: { id: $tokenAddress }) {
      derivedETH
      totalLiquidity
    }
  }
`;
const TOKENS_QUERY = gql`
  query tokens {
    id
    derivedETH
    totalLiquidity
  }
`;

const ETH_PRICE_QUERY = gql`
  query bundles {
    bundles(where: { id: "1" }) {
      ethPrice
    }
  }
`;
export const DashboardItem = () => {
  const { loading: ethLoading, data: ethPriceData } = useQuery(
    ETH_PRICE_QUERY,
    {
      pollInterval: 300,
    }
  );
  const { loading: daiLoading, data: daiData } = useQuery(DAI_QUERY, {
    variables: {
      tokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
    },
    pollInterval: 300,
  });

  const daiPriceInEth = daiData && daiData.tokens[0].derivedETH;
  const daiTotalLiquidity = daiData && daiData.tokens[0].totalLiquidity;
  const ethPriceInUSD = ethPriceData && ethPriceData.bundles[0].ethPrice;

  setInterval(() => {
    console.log(ethPriceInUSD);
  }, 200000);

  /*   setInterval(() => {
    console.log(ethPriceInUSD);
  }, 3000);
 */
  return (
    <div className="card-container">
      <div className="card-title">TOKEN CARDS</div>
      <div className="card-body">
        <h2>
          Dai price:{" "}
          {ethLoading || daiLoading
            ? "Loading token data..."
            : "$" +
              // parse responses as floats and fix to 2 decimals
              (parseFloat(daiPriceInEth) * parseFloat(ethPriceInUSD)).toFixed(
                2
              )}
        </h2>
        <h2>
          Eth price:{" "}
          {ethLoading || daiLoading
            ? "Loading token data..."
            : "$" +
              // parse responses as floats and fix to 2 decimals
              parseFloat(ethPriceInUSD).toFixed(2)}
        </h2>
        <h2>
          Dai total liquidity:{" "}
          {daiLoading
            ? "Loading token data..."
            : // display the total amount of DAI spread across all pools
              parseFloat(daiTotalLiquidity).toFixed(0)}
        </h2>
      </div>
    </div>
  );
};
