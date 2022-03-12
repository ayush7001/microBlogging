import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import StickyHeadTable from '../../shared/components/table';
import SwitchToggle from '../../shared/components/switch';
import {BlogCard, AddBlogCard} from './component/blogCard';
import CanActivate from '../../hoc/canActivate';
import './component/bloglist.css'
import { NavLink } from 'react-router-dom';
class BlogList extends React.Component {
    state = {
        toggle: 'grid',
        blogList: [1,2,3,4,5,6,7,8,9]
    }
    handleToggle = (value) => {
        this.setState({toggle : value.target.checked ? 'grid': 'list'})
    }
    render() {
        return (
            <section className='bloglist-section'>
                <div className='breadcrumb'>
                    <h2 className='s-head'>Blog List</h2>
                    <div className='breadCrumb-action'>
                        <SwitchToggle initialValue={this.state.toggle} handleChange={this.handleToggle}  options={[{id: 'list', label: 'List'}, {id: 'grid', label: "Grid"}]}/>
                    {
                        this.state.toggle === "list" && <NavLink className='icon' to={'/blog/add'}><AddCircleIcon /></NavLink>
                    }
                    </div>
                </div>
                <div className='blog-list'>
                    {
                        this.state.toggle === "list" ?
                        <StickyHeadTable /> : <div className='lists'>
                            {
                                this.state.blogList.map((obj, index) => {
                                    return <BlogCard key={index}/>
                                })
                            }
                        <CanActivate>
                            <AddBlogCard />
                        </CanActivate>
                        </div>
                    }
                </div>
            </section>
        )
    }
}
export default BlogList;