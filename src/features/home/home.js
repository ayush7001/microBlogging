import React from 'react';
import BlogList from './blogList';
class Home extends React.Component {

    render() {
        return <section className='container'>
            <BlogList />
        </section>
    }
}

export default Home;