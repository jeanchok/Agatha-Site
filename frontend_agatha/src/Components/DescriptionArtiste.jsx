import React, { useState } from 'react';

const DescriptionArtiste = () => {
    const [displayDescription, setDisplayDescription] = useState(false);

    return (
        <button className='grid__textCard--link1' onClick={setDisplayDescription(true)}>EN SAVOIR +</button>
    );
};

export default DescriptionArtiste;