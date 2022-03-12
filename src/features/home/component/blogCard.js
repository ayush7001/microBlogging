import { NavLink } from 'react-router-dom'
import blogImage from '../../../assets/images/blog-card.jpg'
const BlogCard = props => {
    return (
        <div className="blog-card">
            <img className="blog-img"  src={blogImage} alt="blog-cover"/>
            <h4>Blog T1</h4>
            <div className='card-content'>
                <p>Written By: <span>Ayush Agarwal</span></p>
                <div className='blog-info'>
                    <span>Likes &#x1F44D;: 232</span>
                    <span>20 Mar 2021</span>
                </div>
            </div>
        </div>
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