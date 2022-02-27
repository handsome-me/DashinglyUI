import React from 'react';

const Heading = ({title}:{title:string}) => {
    return (
        <div style={{fontSize:"large"}}>{title}</div>
    );
};

export default Heading;