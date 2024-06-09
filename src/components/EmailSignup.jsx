import PropTypes from "prop-types";
import React from "react";
import styled from "react-emotion";
import "regenerator-runtime/runtime";

import { MIN_TABLET_MEDIA_QUERY } from "typography-breakpoint-constants";
import { rhythm } from "../utils/typography";

const TestimonialsList = styled.ul`
  list-style-type: none;
  margin: 0 0 ${rhythm(2.5)};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Testimonial = styled.li`
  flex: 0 1 100%;
  margin-top: ${rhythm(1)};

  ${MIN_TABLET_MEDIA_QUERY} {
    flex: 0 1 30%;
  }
`;

const TestimonialAvatar = styled.img`
  width: 120px;
  clip-path: circle(60px at center);
  margin: 0 auto;
  display: block;
`;

const FlexInput = styled.input`
flex: 1;
`;

const FlexP = styled.p`
  display: flex;
`;

const SpacedLabel = styled.label`
  margin-right: ${rhythm(1)};
`;

const SpacedInput = styled.input`
  margin: 0 ${rhythm(1 / 2)};
`;

export default class EmailSignup extends React.Component {
	render() {
		const topHeading = this.props.topHeading || 'Get resource' 
		const submitLabel = this.props.submitLabel || 'Get resource and subscribe' 
		const handleSubmit = async (ev) => {
			// TODO: disable button and maybe change label to show that the form is submitted
			ev.preventDefault();

			// `Content-Type` will implicitly be `multipart/form-data`
			await fetch(
				"https://movementkitchen.us6.list-manage.com/subscribe/post?u=6ddb04df8575fd645103fa989&id=2e76a5987e&v_id=3775&f_id=00df28e3f0",
				{
					mode: "no-cors",
					body: new FormData(ev.target),
					method: "POST",
				},
			);

			if(this.props.redirectTo != null) {
				window.location.assign(this.props.redirectTo);
			}
		};

		return (
			<div>
				<h3>{topHeading}</h3>
				{/* <form action="https://movementkitchen.us6.list-manage.com/subscribe/post?u=6ddb04df8575fd645103fa989&amp;id=2e76a5987e&amp;v_id=3775&amp;f_id=00df28e3f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank"> */}
				<form
					onSubmit={handleSubmit}
					id="mc-embedded-subscribe-form"
					name="mc-embedded-subscribe-form"
				>
					<FlexP>
						<SpacedLabel htmlFor="mce-EMAIL">Email Address</SpacedLabel>
						<FlexInput type="email" name="EMAIL" id="mce-EMAIL" required="" />
					</FlexP>
					<FlexP>
						<SpacedLabel htmlFor="mce-FNAME">First Name </SpacedLabel>
						<FlexInput type="text" name="FNAME" id="mce-FNAME" />
					</FlexP>
					<FlexP>
						<SpacedLabel htmlFor="mce-LNAME">Last Name </SpacedLabel>
						<FlexInput type="text" name="LNAME" id="mce-LNAME" />
					</FlexP>
					<fieldset name="interestgroup_field" style={{display: "none"}}>
						<label htmlFor="gdpr2093">
							<SpacedInput
								type="checkbox"
								id="gdpr_2093"
								name="gdpr[2093]"
								defaultValue="Y"
								defaultChecked
								disabled
							/>
							<span>Email</span>
						</label>
					</fieldset>
					<p>
						You can change your mind at any time by clicking the unsubscribe
						link in the footer of any email you receive from us, or by
						contacting us at ivana@movementkitchen.co.uk. We will treat your
						information with respect. For more information about our privacy
						practices please visit our website. By clicking below, you agree
						that we may process your information in accordance with these terms.
					</p>
					<p>
						We use Mailchimp as our marketing platform. By clicking below to
						subscribe, you acknowledge that your information will be transferred
						to Mailchimp for processing.
						<a href="https://mailchimp.com/legal/terms"> Learn more</a> about
						Mailchimp's privacy practices.
					</p>
					<input
						className="big"
						type="submit"
						name="subscribe"
						id="mc-embedded-subscribe"
						value={submitLabel}
					/>
				</form>
			</div>
		);
	}
}

EmailSignup.propTypes = {
	redirectTo: PropTypes.string,
	topHeading: PropTypes.string,
	submitLabel: PropTypes.string,
};
