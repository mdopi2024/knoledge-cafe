import PropTypes from 'prop-types';

const Blog = ({blog, addToBookMark,addReadingTime}) => {
    const {cover,title,author,author_img,reading_time,posted_date,hashtags}=blog
    return (
        <div className='mb-20'>
            <img className='w-full' src={cover} alt="" />

            <div className='flex justify-between items-center mx-4'>
                <div className='flex items-center gap-5'>
                 <img className='w-16 h-16 rounded-full' src={author_img} alt="" /> 
                <div>
                <h3 className='font-bold'>{author}</h3>  
                <p>{posted_date}</p>  
                 </div> 
                  
                </div>


                <div className='flex gap-5'>
                    <span>{reading_time} read time</span>
                    <button onClick={()=> addToBookMark(blog)} className='border border-black px-2 py-2 rounded-md'>Add to bookmark</button>
                </div>
            </div>
            <h3>{title}</h3>
            <p>
                {
                    hashtags.map((has,indx)=><span key={indx} ><a className='mx-2'  href="">{has}</a></span>)
                }
            </p>
            <button  onClick={()=> addReadingTime(reading_time)} className='border border-black py-2 px-2 rounded-xl'>mark as read</button>
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired
}

export default Blog;