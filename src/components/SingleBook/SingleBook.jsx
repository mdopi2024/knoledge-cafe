import React from 'react';

const SingleBook = ({bookmark}) => {
    const {title}=bookmark
    return (
        <div className='bg-slate-400 p-4 m-4 mx-auto rounded-lg'>
           <h1>{title}</h1>
        </div>
    );
};

export default SingleBook;