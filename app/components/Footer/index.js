import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';

const DEFAULT_GITHUB_LINK = 'https://github.com/nguyenvanhuan243';
const Footer = ({ authorLink = DEFAULT_GITHUB_LINK }) => {
  const {
    licenseMessage,
    authorMessage
  } = messages
  return (
    <Wrapper>
      <section>
        <FormattedMessage {...licenseMessage} />
      </section>
      <section>
        <LocaleToggle />
      </section>
      <section>
        <FormattedMessage
          {...authorMessage}
          values={{
            author: <A href={authorLink}>Huan Capital</A>,
          }}
        />
      </section>
    </Wrapper>
  );
};

export default Footer;
