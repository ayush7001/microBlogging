import React from 'react';
import moment from 'moment'
import EditIcon from '@mui/icons-material/Edit';
import { NavLink } from 'react-router-dom';
import TextField from '@mui/material/TextField/TextField';
import Button from '@mui/material/Button/Button';
import withRouter from '../../hoc/withRouter';
import CanActivate from '../../hoc/canActivate';
import axiosInstance from '../../shared/services/httpService';
import blogImage from '../../assets/images/blog-card.jpg';
import {Context as AuthContext} from '../../shared/context/Auth-context'
import './component/blog.css'
class ViewBlog extends React.Component {
    state = {
        blogDetail: null,
        commentText: ''
    }

    componentDidMount () {
        this.getBlogDetails();
    }

    handleComment = (e) => {
        this.setState({
            commentText: e.target.value
        })
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

    handleSubmitComment = async() => {
        try {
            const comment = this.state.commentText;
            const commentBody =  {
                comment: comment,
                authorName: this.context.state.name,
                authorEmail: this.context.state.email
            }
            const response = await axiosInstance.put(`blogs/${this.props.params.id}/comment`, {comment: commentBody}, {headers: {
                'Content-Type': 'application/json',
                'x-access-token': this.context.state.token,
            }})
            this.setState({blogDetail: {...this.state.blogDetail, comments: [...this.state.blogDetail.comments, commentBody]}, commentText: ''})
            console.log(response)
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <>
            {
                        this.state.blogDetail ? <>
                            <section className='blog-section container'>
                    
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
                    </div> 
            
                <hr/>
                </section>
                <section className='comment-form-section container'>
                    <div className='comment-item'>
                        <div className="avtar-image">A</div>
                        <div className='comment-info'>
                            <span className='comment-author'>{this.context?.state?.name}</span>
                            <TextField className='comment-input' onChange={this.handleComment} placeholder='Leave your comment here' multiline rows={5} fullWidth value={this.state.commentText} />
                            <Button className='comment-btn' disabled={this.state.commentText === "" || !this.context.state.token} onClick={this.handleSubmitComment} variant='outlined'>Comment</Button>
                        </div>
                    </div>
                </section>
                <section className='comment-section container'>
                    <h3>{this.state.blogDetail?.comments?.length} Comments</h3>
                    <div className='comments-list'>
                        {
                            this.state.blogDetail.comments && this.state.blogDetail.comments.map((obj, index) => {
                                return (
                                    <div className='comment-item' key={index}>
                                        <div className="avtar-image">{obj.authorName.charAt(0)}</div>
                                        <div className='comment-info'>
                                            <div className="comment-info-header">
                                                <span className='comment-author'>{obj.authorName}</span>
                                                {/* <span className='comment-time'>2 Days ago</span> */}
                                            </div>
                                            <p>{obj.comment}</p>
                            </div>
                        </div>
                                )
                            })
                        }
                    </div>
                </section>
                        </> : <h2 className='loading'>Loading...</h2>
    }
    </>
                
        
        )
    }
}

ViewBlog.contextType = AuthContext;
export default withRouter(ViewBlog);