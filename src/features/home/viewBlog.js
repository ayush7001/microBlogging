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
            <>
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
                <hr/>
                </section>
                <section className='comment-form-section container'>
                    <div className='comment-item'>
                        <div className="avtar-image">A</div>
                        <div className='comment-info'>
                            <span className='comment-author'>Ayush Agarwal</span>
                            <TextField className='comment-input' placeholder='Leave your comment here' multiline rows={5} fullWidth />
                            <Button className='comment-btn' variant='outlined'>Comment</Button>
                        </div>
                    </div>
                </section>
                <section className='comment-section container'>
                    <h3>7 Comments</h3>
                    <div className='comments-list'>
                        <div className='comment-item'>
                            <div className="avtar-image">A</div>
                            <div className='comment-info'>
                                <div className="comment-info-header">
                                    <span className='comment-author'>Ayush Agarwal</span>
                                    <span className='comment-time'>2 Days ago</span>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            </div>
                        </div>
                        <div className='comment-item'>
                            <div className="avtar-image">A</div>
                            <div className='comment-info'>
                                <span className='comment-author'>Ayush Agarwal</span>
                                <span className='comment-time'>2 Days ago</span>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            </div>
                        </div>
                        <div className='comment-item'>
                            <div className="avtar-image">A</div>
                            <div className='comment-info'>
                                <span className='comment-author'>Ayush Agarwal</span>
                                <span className='comment-time'>2 Days ago</span>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            </div>
                        </div>
                        <div className='comment-item'>
                            <div className="avtar-image">A</div>
                            <div className='comment-info'>
                                <span className='comment-author'>Ayush Agarwal</span>
                                <span className='comment-time'>2 Days ago</span>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

ViewBlog.contextType = AuthContext;
export default withRouter(ViewBlog);