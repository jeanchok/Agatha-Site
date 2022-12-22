import React, { useState } from 'react';

const ModuleInfos = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (

        <div className='moduleInfoContainer'>
            <div className='moduleInfoContainer__title'>
                <h4>{props.title} </h4>
                {isExpanded ?
                    <button onClick={() => setIsExpanded(!isExpanded)}>
                        <span>-</span>
                    </button>

                    :
                    <button onClick={() => setIsExpanded(!isExpanded)}>
                        <span>+</span>
                    </button>
                }
            </div>
            {isExpanded ? <p>{props.text}</p> : null}
        </div>

    );
};

export default ModuleInfos;