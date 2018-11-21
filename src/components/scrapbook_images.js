
import React from 'react';

export default props => {
    console.log("Scrapbook image props: ", props);
    const { src } = props.about;
    return (
            <img src={src} alt="bob's burgers"/>
    )
}
