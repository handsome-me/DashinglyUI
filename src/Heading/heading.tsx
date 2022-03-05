import { CSSObject } from '@emotion/css';
import React from 'react';

const Heading = ({title,style}:{title:string,style?:React.CSSProperties}) => {
    return (
        <div style={{textAlign:'center',fontSize:"large",...style}} >{title}</div>
    );
};

export default Heading;