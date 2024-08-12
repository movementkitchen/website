import get from "lodash/get";
import React from "react";
import Helmet from "react-helmet";
import EmailSignup from "../components/EmailSignup";

import { rhythm } from "../utils/typography";

class EmailPage extends React.Component {
	render() {
		const siteTitle = get(this, "props.data.site.siteMetadata.title");
		const pageTitle = get(this, "props.data.markdownRemark.frontmatter.title");
		const pageContent = get(this, "props.data.markdownRemark.html");
		const resourcePath = get(
			this,
			"props.data.markdownRemark.frontmatter.resourcePath",
		);
		const formHeading = get(this, "props.data.markdownRemark.frontmatter.formHeading");
		const submitLabel = get(this, "props.data.markdownRemark.frontmatter.submitLabel");
		const formAction = get(this, "props.data.markdownRemark.frontmatter.formAction");

		return (
			<div
				style={{
					maxWidth: rhythm(32),
					padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
					margin: "0 auto",
				}}
			>
				<Helmet title={`${pageTitle} | ${siteTitle}`} />
				<div dangerouslySetInnerHTML={{ __html: pageContent }} />
				<EmailSignup redirectTo={resourcePath} topHeading={formHeading} submitLabel={submitLabel} formAction={formAction} />
			</div>
		);
	}
}

export default EmailPage;

export const pageQuery = graphql`
  query EmailPageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        resourcePath
        formHeading
        submitLabel
		formAction
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
