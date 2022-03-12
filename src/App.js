import { useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import {useNavigate} from 'react-router'
import './App.css';
import Layout from './hoc/layout';
import Home from './features/home/home';
import AddBlog from './features/home/addBlog';
import EditBlog from './features/home/editBlog';
import ViewBlog from './features/home/viewBlog';
import Login from './features/login/login';
import {Provider as AuthProvider}  from './shared/context/Auth-context';
import authService from './shared/services/authService';
function App() {
  const navigation = useNavigate()
  return (
    <div className="App">
        <AuthProvider>
          <Layout>
              <Routes>
                <Route path='/' exact element={<Home/>} />
                <Route path='/login' caseSensitive exact element={<Login history={navigation}/>} />
                <Route path='/blog/add/*' exact element={<AddBlog/>} />
                <Route path='/blog/edit/:id/*' exact element={<EditBlog/>} />
                <Route path='/blog/:id' exact element={<ViewBlog/>} />
              </Routes>
          </Layout>
        </AuthProvider>
    </div>
  );
}

export default App;
