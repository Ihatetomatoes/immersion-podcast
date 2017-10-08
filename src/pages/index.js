import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const Date = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
`;

const Heading = styled.h1`
  margin: 0 0 12px 0;
  padding: 0;
  font-size: 18px;
`;

export default ({ data }) => (
  <div>
    {/* <h4>{data.allMarkdownRemark.totalCount} Posts</h4> */}
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Date>
          Date: <span color="#BBB">— {node.frontmatter.date}</span>
        </Date>
        <Link
          to={node.fields.slug}
          css={{ textDecoration: `none`, color: `inherit` }}
        >
          <Heading>{node.frontmatter.title} </Heading>
        </Link>
        <p>{node.excerpt}</p>
      </div>
    ))}
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
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
