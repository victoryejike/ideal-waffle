import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

//cannot use query variables in component querying but can do such in page query

function Navbar(props) {
  const data = useStaticQuery(graphql
    `
      query SiteInfo {
        site {
          siteMetadata {
            title
          }
        }
      }
    `  
  )

  const { title } = data.site.siteMetadata
  return (
    <nav>
      <h1>{ title }</h1>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Portfolio projects</Link>
      </div>
    </nav>
  );
}

export default Navbar;