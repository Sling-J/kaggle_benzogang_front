import React from 'react';

import './text-title.css'

const TextTitle = (props) => {
   return (
      <h3>
         {props.children && props.children}
      </h3>
   )
}

export default TextTitle;