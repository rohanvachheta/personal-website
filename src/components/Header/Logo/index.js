import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import LogoImage from '../../../assets/images/rohan_image.jpg';

import * as Styled from './styles';

const Logo = () => {
  const { site, placeholderImage } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const logoTitle = site.siteMetadata.title;

  return (
    <Styled.Logo to="/">
      <Styled.Image>
        {/* <Img fluid={logoImage} alt={logoTitle} /> */}
        <img
          src="https://lh3.googleusercontent.com/a-/AOh14Gh0lgBZjhMeghlHI_ggrReLwdnNY6VEYo8x7pyQ=s96-c-rg-br100"
          style={{ height: '100%' }}
        />
      </Styled.Image>
      <Styled.Text>{logoTitle}</Styled.Text>
    </Styled.Logo>
  );
};

export default Logo;
