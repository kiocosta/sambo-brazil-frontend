import React from "react";
import { graphql, StaticQuery } from "gatsby";

export default function Header() {
  return (
    <StaticQuery
      query={
        graphql`
        {
          allSitePage {
            nodes {
              id
            }
          }
        }
        `
      }
      render={data => {
        <div>
          <h1>{console.log(data)}</h1>
          <h1>{data.allSitePage.nodes[0].id}</h1>
        </div>
      }}
    />
  )
}
