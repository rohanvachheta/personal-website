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
      placeholderImage: file(relativePath: { eq: "rohan_image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 80) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  const logoTitle = site.siteMetadata.title;
  const logoImage = placeholderImage.childImageSharp.fluid;

  return (
    <Styled.Logo to="/">
      <Styled.Image>
        {/* <Img fluid={logoImage} alt={logoTitle} /> */}
        <img src={LogoImage} style={{ height: '100%' }} />
      </Styled.Image>
      <Styled.Text>{logoTitle}</Styled.Text>
    </Styled.Logo>
  );
};

export default Logo;
