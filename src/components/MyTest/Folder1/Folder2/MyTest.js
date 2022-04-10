import React from 'react';
/**
 * import Welcome from '../../../Welcome'; // This is Relative Import. It looks ugly!
 * import Welcome from 'components/Welcome'; // This is Absolute Import.
 */
import Welcome from 'components/Welcome';

function MyTest(props) {
    return (
        <>
            <Welcome></Welcome>
        </>
    );
}

export default MyTest;