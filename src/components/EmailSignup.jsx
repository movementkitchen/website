import PropTypes from 'prop-types';
import React from 'react';
import styled from 'react-emotion';
import 'regenerator-runtime/runtime';

import { rhythm } from '../utils/typography';

const FormRow = styled.div`
  display: flex;
  margin-bottom: ${rhythm(0.5)};
`;

const LabelContainer = styled.div`
  min-width: 150px; /* Width for all labels based on widest label */
  display: flex;
  align-items: center;
`;

const InputContainer = styled.div`
  flex: 1;
`;

const FlexInput = styled.input`
  width: 100%;
  box-sizing: border-box;
`;

const SpacedLabel = styled.label`
  margin-right: ${rhythm(0.5)};
`;

const SubscribeButton = styled.input`
  margin-top: ${rhythm(1)};
`;

export default class EmailSignup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formSubmitted: false,
    };
  }

  render() {
    const topHeading = this.props.topHeading || 'Get resource';
    const submitLabel = this.props.submitLabel || 'Get resource and subscribe';
    const formAction =
      this.props.formAction || 'https://app.convertkit.com/forms/6946600/subscriptions';
    const handleSubmit = async (ev) => {
      ev.preventDefault();

      // `Content-Type` will implicitly be `multipart/form-data`
      await fetch(formAction, {
        mode: 'no-cors',
        body: new FormData(ev.target),
        method: 'POST',
      });

      if (this.props.redirectTo != null) {
        window.location.assign(this.props.redirectTo);
      }

      this.setState({ formSubmitted: true });
    };

    return (
      <div>
        <h3>{topHeading}</h3>
        {this.state.formSubmitted ? (
          'Thanks, please have a look in your inbox and confirm your subscription!'
        ) : (
          <form
            onSubmit={handleSubmit}
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            data-sv-form="6946600"
            data-uid="3c230f6b48"
            data-format="inline"
            data-version="5"
          >
            <FormRow>
              <LabelContainer>
                <SpacedLabel htmlFor="mce-EMAIL">Email Address</SpacedLabel>
              </LabelContainer>
              <InputContainer>
                <FlexInput type="email" name="email_address" id="mce-EMAIL" required="" />
              </InputContainer>
            </FormRow>
            <FormRow>
              <LabelContainer>
                <SpacedLabel htmlFor="mce-FNAME">First Name</SpacedLabel>
              </LabelContainer>
              <InputContainer>
                <FlexInput type="text" name="fields[first_name]" id="mce-FNAME" />
              </InputContainer>
            </FormRow>
            <FormRow>
              <LabelContainer>
                <SpacedLabel htmlFor="mce-LNAME">Last Name</SpacedLabel>
              </LabelContainer>
              <InputContainer>
                <FlexInput type="text" name="fields[last_name]" id="mce-LNAME" />
              </InputContainer>
            </FormRow>
            <SubscribeButton
              className="big"
              type="submit"
              name="subscribe"
              id="mc-embedded-subscribe"
              value={submitLabel}
            />
          </form>
        )}
      </div>
    );
  }
}

EmailSignup.propTypes = {
  redirectTo: PropTypes.string,
  topHeading: PropTypes.string,
  submitLabel: PropTypes.string,
  formAction: PropTypes.string,
};
