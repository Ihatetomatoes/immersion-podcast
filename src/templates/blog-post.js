import React from "react";
import AudioPlayer from '../components/AudioPlayer'

export default ({ data }) => {
  const post = data.markdownRemark;
  console.log(post.frontmatter.file);
  return (
    <div>
      <div className="content-wrapper">
        <AudioPlayer file={post.frontmatter.file} />
        <div className="post">
          <div className="post__meta">
            <p className="episode__meta">
              <span className="episode__season">{post.frontmatter.season}</span>
              <span className="episode__duration">{post.frontmatter.duration}</span>
            </p>
            <h1>{post.frontmatter.title}</h1>
            <p className="post__date">{post.frontmatter.date}</p>
          </div>
          <p>{post.frontmatter.overview}</p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        overview
        season
        duration
        file 
      }
    }
  }
`;
