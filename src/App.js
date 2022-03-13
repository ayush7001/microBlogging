import { useEffect, useContext } from 'react';
import {Routes, Route} from 'react-router-dom';
import {useNavigate} from 'react-router'
import './App.css';
import Layout from './hoc/layout';
import Home from './features/home/home';
import AddBlog from './features/home/addBlog';
import EditBlog from './features/home/editBlog';
import ViewBlog from './features/home/viewBlog';
import Login from './features/login/login';
import {Context as AuthContext} from './shared/context/Auth-context';
import authService from './shared/services/authService';
import ProtectedRoute from './hoc/protectedRoute';
function App() {
  const navigation = useNavigate();
  const {state, userLogin} = useContext(AuthContext);
  useEffect(() => {
    if(authService.isUserLoggedIn()) {
        const authData = authService.getAuthData();
        userLogin({token: authData.token, email: authData.email, name: authData.name})
    }
}, [])
  return (
    <div className="App">
          <Layout>
              <Routes>
                <Route path='/' exact element={<Home/>} />
                <Route path='/login' caseSensitive exact element={<Login history={navigation}/>} />
                <Route path='/blog/add/*' exact element={ <ProtectedRoute>
                  <AddBlog/>
                </ProtectedRoute>} />
                <Route path='/blog/edit/:id/*' exact element={<ProtectedRoute>
                  <EditBlog/>
                </ProtectedRoute> } />
                <Route path='/blog/:id' exact element={<ViewBlog/>} />
              </Routes>
          </Layout>
    </div>
  );
}

export default App;
