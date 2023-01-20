import { RaceBy } from '@uiball/loaders';
import React from 'react';

const Loader = () => {
    return (
        <div className='h-28 flex items-center justify-center'>
            <RaceBy 
                size={80}
                lineWeight={5}
                speed={1.4} 
                color="black"
            />
        </div>
    );
}

export default Loader;
