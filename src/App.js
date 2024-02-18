
import { ToastContainer } from 'react-toastify';
import './App.css';
import Login from './Login/Login';
import 'react-toastify/dist/ReactToastify.css';
import MainPage from './mainPage/MainPage';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import SignUp from './SignUp/SignUp';
import {  useSelector } from 'react-redux'
import {  authSelector } from './redux/authReducer';

function App() {

  const {isLoggedIn}=useSelector(authSelector);

  const router =createBrowserRouter([
    {
      path:'/',
      children:[
        {index:true,element:<Login />},
        {
          path:'/mainpage',element:<MainPage />
        },
        {
          path:'/signup',element:!isLoggedIn && <SignUp />
        }

      ]
    }
  ])


  return (
    <div className="App">
      <ToastContainer autoClose={3000} />
      <RouterProvider router={router}/>
    </div>
  
  );
}

export default App;
