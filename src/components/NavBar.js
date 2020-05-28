import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => (
  <nav>
  <section>
  <Link to="/">Dashboard</Link>
  <Link to="/posts">Posts</Link>
  </section>
  </nav>
)

export default NavBar
