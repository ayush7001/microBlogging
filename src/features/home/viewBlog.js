import React from 'react';
import moment from 'moment'
import EditIcon from '@mui/icons-material/Edit';
import { NavLink } from 'react-router-dom';
import withRouter from '../../hoc/withRouter';
import CanActivate from '../../hoc/canActivate';
import axiosInstance from '../../shared/services/httpService';
import blogImage from '../../assets/images/blog-card.jpg';
import {Context as AuthContext} from '../../shared/context/Auth-context'
import './component/blog.css'
class ViewBlog extends React.Component {
    state = {
        blogDetail: null
    }

    componentDidMount () {
        this.getBlogDetails();
    }

    getBlogDetails = async() => {
        try {
            const response = await axiosInstance.get(`blogs/${this.props.params.id}`);
            if(response.data) {
                this.setState({
                    blogDetail: response.data.data.blog
                })
            }
        } catch (error)  {
            console.log(error);
        }
    }
    handleLikeBlog = () => {
        if(!this.context.state.token) {
            return;
        }
        this.setState({
            blogDetail: {...this.state.blogDetail, likes: this.state.blogDetail.likes + 1 }
        }, () => {
            this.updateBlogLikes();
        })
    }

    updateBlogLikes = async() => {
        try {
            console.log(this.context.state)
            const response = await axiosInstance.put(`blogs/${this.props.params.id}/likes`, {likes: this.state.blogDetail.likes}, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': this.context.state.token
                }
            });
            console.log(response)
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <section className='blog-section container'>
                {
                    this.state.blogDetail ? 
                <div className='blog-content'>
                    <div className='blog-banner' style={{backgroundImage: `url(${blogImage})`}}></div>
                    <h1>{this.state.blogDetail.blogTitle}</h1>
                    <h4>Written By: <span>{this.state.blogDetail.authorName}</span> </h4> 
                    <div className='blog-info'>
                        <span> <u  onClick={this.handleLikeBlog}>Like</u>: {this.state.blogDetail.likes}</span> <span>{moment(this.state.blogDetail.createdAt).format('DD MMM YYYY')} { " "} <CanActivate>
                        <NavLink to={`/blog/edit/${this.props.params.id}`}><EditIcon fontSize='16'  className={'edit-icon'}/></NavLink>
                            </CanActivate> </span>
                    </div>
                    <div className='blog-content'>
                        <p>
                            {this.state.blogDetail.blogContent}
                        </p>
                    </div>

                </div> : <h2 className='loading'>Loading...</h2>
                }
            </section>
        )
    }
}

ViewBlog.contextType = AuthContext;
export default withRouter(ViewBlog);