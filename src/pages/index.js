import React from "react";
import Link from "gatsby-link";
import Hero from "../components/Hero";

export default ({ data }) => (
  <div>
    <Hero latestPost={data.allMarkdownRemark.edges[0].node} />
    <div className="content-wrapper">
      <h1>Episodes</h1>
      <div className="episode-list">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.frontmatter.title} className="episode">
            <p className="episode__meta">
              <span className="episode__season">{node.frontmatter.season}</span>
              <span className="episode__duration">
                {node.frontmatter.duration}
              </span>
            </p>
            <h2 className="episode__title">
              <Link to={node.fields.slug}>{node.frontmatter.title} </Link>
            </h2>
            <p className="episode__date">{node.frontmatter.date}</p>

            <p className="episode__overview">{node.frontmatter.overview}</p>
            <p>
              <Link to={node.fields.slug}>View show details</Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            overview
            season
            duration
            date(formatString: "DD MMMM, YYYY")
            file
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
