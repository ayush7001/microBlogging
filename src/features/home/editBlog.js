import React from 'react';
import BlogForm from './component/blogForm';
import {Context as AuthContext} from '../../shared/context/Auth-context'
import withRouter from '../../hoc/withRouter';
import axiosInstance from '../../shared/services/httpService';
class EditBlog extends React.Component {
    state = {
        initialValue: null
    }
    componentDidMount() {
        this.setState({
            initialValue: {
                authorName: this.context.state.name || '',
                blogTitle: '',
                blogContent: ''
            }
        }, () => {
            this.getBlogDetail();
        })
    }

    getBlogDetail = async() => {
        try {
            const response = await axiosInstance.get(`/blogs/${this.props.params.id}`);
            if(response.data.data) {
                this.setState({
                    initialValue: {
                        ...this.state.initialValue,
                        blogTitle: response.data.data.blog.blogTitle,
                        blogContent: response.data.data.blog.blogContent,
                        authorName: response.data.data.blog.authorName
                    }
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
    handleSubmit = async (value) => {
        try {
            const response = await axiosInstance.put(`blogs/${this.props.params.id}`, value,{
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': this.context.state.token
                }
            });
            if(!response.data.isError) {
                this.props.navigate('/')
            }
            console.log(response.data)
        } catch(error) {
            console.log('error', error);
        }
    }
    render() {
        return (
            <>
                <BlogForm title='Edit blog post' initialValue={this.state.initialValue} handleSubmit={this.handleSubmit}/>
            </>
        )
    }
}

EditBlog.contextType = AuthContext
export default withRouter(EditBlog)