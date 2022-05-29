import React from "react";
import { graphql, StaticQuery } from "gatsby";

export default function Header() {
  return (
    <StaticQuery
      query={
        graphql`
          {
            allStrapiPage {
              nodes {
                id
                publishedAt
                slug: Slug
                title: Titulo
                body: Corpo {
                  Titulo
                  Texto {
                    data {
                      text: Texto
                    }
                  }
                }
              }
            }
          }
        `
      }
      render={data => {
        <div>
          <h1>teste</h1>
          <h1>{console.log(data)}</h1>
          <h1>{data.allStrapiPage.nodes[0].title}</h1>
        </div>
      }}
    />
  )
}
