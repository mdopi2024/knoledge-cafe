import React from 'react';
import SingleBook from '../SingleBook/SingleBook';

const Bookmark = ({bookMarks,readTime}) => {
    return (
        <div className='mx-auto'>
            <div>
                <h1>total reading time{readTime}</h1>
            </div>
          <div>
          {
            bookMarks.map(bookmark=><SingleBook bookmark={bookmark}></SingleBook>)
           }
          </div>
        </div>
    );
};

export default Bookmark;