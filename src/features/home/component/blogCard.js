import { NavLink } from 'react-router-dom'
import moment from 'moment'
import blogImage from '../../../assets/images/blog-card.jpg'
const BlogCard = props => {
    return (
        <NavLink to={`/blog/${props.blogData._id}`} style={{textDecoration: 'none'}}>
            <div className="blog-card">
                <img className="blog-img"  src={blogImage} alt="blog-cover"/>
                <h4>{props.blogData.blogTitle}</h4>
                <div className='card-content'>
                    <p>Written By: <span>{props.blogData.authorName}</span></p>
                    <div className='blog-info'>
                        <span>Likes &#x1F44D;: {props.blogData.likes}</span>
                        <span>{moment(props.blogData.createdAt).format('DD MMM YYYY')}</span>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

const AddBlogCard = props => {
    return (
        <div className="blog-card">
            <img className="blog-img"  src={blogImage} alt="blog-cover"/>
            <NavLink className='btn blog-add' to={'/blog/add'}>Add</NavLink>
        </div>
    )
}

export {BlogCard, AddBlogCard};