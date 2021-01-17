import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link href="https://github.com/rohanvachheta" rel="noreferrer noopener" target="_blank">
          GitHub
        </Styled.Link>
        <Styled.Link href="https://twitter.com/rohan_vachheta" rel="noreferrer noopener" target="_blank">
          Twitter
        </Styled.Link>
        <Styled.Link
          href="https://www.linkedin.com/in/rohan-vachheta-42370215a/"
          rel="noreferrer noopener"
          target="_blank"
        >
          linkedIn
        </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
