import React from 'react';
import BlogForm from './component/blogForm';
import {Context as AuthContext} from '../../shared/context/Auth-context'
import withRouter from '../../hoc/withRouter';
class EditBlog extends React.Component {
    state = {
        initialValue: null
    }
    componentDidUpdate(){
        if(!this.state.initialValue) {
            this.setState({
                initialValue: {
                    authorName: this.context.state.name,
                    blogTitle: '',
                    blogContent: ''
                }
            }, () => {
                console.log(this.props.params)
            })
        }
    }
    handleSubmit = (value) => {
        console.log(value);
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