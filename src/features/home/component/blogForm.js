import { useState, useMemo, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import {useNavigate} from 'react-router';
import './blogForm.css';
const BlogForm = props => {
    const [initialValue, setInitialValue] = useState(props.initialValue|| {authorName: '', blogTitle: '', blogContent: ''})

    useEffect(() => {
        if(props.initialValue) {
            setInitialValue({...props.initialValue})
        }
    }, [props.initialValue])
    const navigation = useNavigate()
    const handleCancel = (e) => {
        e.preventDefault();
        navigation('/')
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSubmit(initialValue)
    }
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setInitialValue({...initialValue, [name]: value})
    }
    const handleDisable = () => {
        let isDisable = true
        for(let key in initialValue) {
            if(initialValue[key]?.trim() !== '') {
                isDisable = false;       
            } else {
                isDisable = true
            }
        }
        return isDisable;
    }
    const isDisable = useMemo(() => handleDisable(), [initialValue])
    return (
        <div className="container blog-form">
            <h2 className='s-head'>{props.title}</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-input-group'>
                    <TextField  value={initialValue.authorName} onChange={handleChange}   name='authorName'   className='form-input' label="Author Name" variant="outlined" fullWidth/>
                    <TextField  value={initialValue.blogTitle} onChange={handleChange}  name='blogTitle'  className='form-input' label="Post Title" variant="outlined"/>
                </div>
                <div className='form-input-group'>
                    <TextField value={initialValue.blogContent} onChange={handleChange}  name='blogContent'  multiline rows={15} className='form-input' fullWidth label="Post Content" variant="outlined"/>
                </div>
                <div className='btn-group'>
                    <button type='submit' disabled={isDisable} className='btn'>Submit</button>
                    <button type='button'className='btn' onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    )
}
export default BlogForm