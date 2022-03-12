import React from 'react';
import BlogForm from './component/blogForm';
import {Context as AuthContext} from '../../shared/context/Auth-context'
class AddBlog extends React.Component {
    state = {
        initialValue: null
    }
    // componentDidMount(){
    //     if(!this.state.initialValue) {
    //         this.setState({
    //             initialValue: {
    //                 authorName: this.context.state.name,
    //                 blogTitle: '',
    //                 blogContent: ''
    //             }
    //         })
    //     }
    // }    
    componentDidUpdate(){
        if(!this.state.initialValue) {
            this.setState({
                initialValue: {
                    authorName: this.context.state.name,
                    blogTitle: '',
                    blogContent: ''
                }
            })
        }
    }
    handleSubmit = (value) => {
        console.log(value);
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
export default AddBlog