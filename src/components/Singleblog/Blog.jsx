import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {cover,tittle,author,author_img}=blog
    return (
        <div>
            
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired
}

export default Blog;