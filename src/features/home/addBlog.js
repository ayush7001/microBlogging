import React from 'react';
import BlogForm from './component/blogForm';
import {Context as AuthContext} from '../../shared/context/Auth-context';
import axiosInstance from '../../shared/services/httpService';
import withRouter from '../../hoc/withRouter';
class AddBlog extends React.Component {
    state = {
        initialValue: null
    }
    componentDidMount(){
        this.setState({
            initialValue: {
                authorName: this.context.state.name || '',
                blogTitle: '',
                blogContent: ''
            }
        })
    }    
    componentDidUpdate(){
        if(this.state.initialValue.authorName === '') {
            this.setState({
                initialValue: {
                    authorName: this.context.state.name,
                    blogTitle: '',
                    blogContent: ''
                }
            })
        }
    }
    handleSubmit = async (value) => {
        try {
            console.log(value);
            const response = await axiosInstance.post('blogs/add', {...value, authorEmail: this.context.state.email}, {headers: {
                'Content-Type': 'application/json',
                'x-access-token': this.context.state.token
            }})
            if(!response.data.isError) {
                this.props.navigate('/')
            }
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <>
                <BlogForm title='Add blog post' initialValue={this.state.initialValue} handleSubmit={this.handleSubmit}/>
            </>
        )
    }
}

AddBlog.contextType = AuthContext
export default withRouter(AddBlog)