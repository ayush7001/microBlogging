import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import StickyHeadTable from '../../shared/components/table';
import SwitchToggle from '../../shared/components/switch';
import {BlogCard, AddBlogCard} from './component/blogCard';
import CanActivate from '../../hoc/canActivate';
import axiosInstance from '../../shared/services/httpService';
import './component/bloglist.css'
import { NavLink } from 'react-router-dom';
class BlogList extends React.Component {
    state = {
        toggle: 'grid',
        blogList: [],

    }
    componentDidMount() {
        this.getBlogList()
    }
    handleToggle = (value) => {
        this.setState({toggle : value.target.checked ? 'grid': 'list'})
    }

    getBlogList = async() => {
        try {
            const response = await axiosInstance.get('blogs');
            if(!response.data.isError) {
                this.setState({blogList: response.data.data.list})
            }
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <section className='bloglist-section'>
                <div className='breadcrumb'>
                    <h2 className='s-head'>Blog List</h2>
                    <div className='breadCrumb-action'>
                        <SwitchToggle initialValue={this.state.toggle} handleChange={this.handleToggle}  options={[{id: 'list', label: 'List'}, {id: 'grid', label: "Grid"}]}/> &nbsp;
                    {
                        this.state.toggle === "list" && <NavLink title='Add Blog' className='icon' to={'/blog/add'}><AddCircleIcon /></NavLink>
                    }
                    </div>
                </div>
                {
                    this.state.blogList.length > 0 ? <div className='blog-list'>
                    {
                        this.state.toggle === "list" ?
                        <StickyHeadTable list={this.state.blogList} /> : <div className='lists'>
                            {
                                this.state.blogList.map((obj, index) => {
                                    return <BlogCard key={index} blogData={obj}/>
                                })
                            }
                        <CanActivate>
                            <AddBlogCard />
                        </CanActivate>
                        </div>
                    }
                </div> : <h2 className='loading'>Loading...</h2>
                }
                
            </section>
        )
    }
}
export default BlogList;