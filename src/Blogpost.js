import React from 'react';
import { Typography, Paper } from '@material-ui/core';


const Blogpost = ({ title, content }) => (
    <div>
      <h2>{title}</h2>
      <p>{content || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi."}</p>
    </div>
  );
  

export default Blogpost;