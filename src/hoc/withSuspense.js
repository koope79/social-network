import React, { Suspense } from 'react';

export const suspenseHoc = (Component) => {
    return (props) => (
        <Suspense fallback={<div>loading...</div>}>
            <Component {...props}/>
        </Suspense>
    );
}