import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Pages/Header/Header';
import Sidebar from './Pages/Sidebar/Sidebar';
import Welcome from './Pages/Welcome/Welcome';
import About from './Pages/About/About';
import Community from './Pages/Community/Community';
import Resources from './Pages/Resources/Resources';
import StateHookPage from './Pages/StateHookPage/StateHook'
import ErrorPage from './Pages/Error/Error';
import Users from './Pages/Users/Users';
import UserPage from './Pages/Users/UserPage';
import usersData from './data/users.json'
import './global.css';

// Outlet вказує де буде вбудовуватися наші компоненти 
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    Outlet
} from 'react-router-dom';

const Root = ()=>{
    return(
        <div className='container'>
            <Header />
            <Sidebar />
            <Outlet/>  
        </div>
    );
}

// схема маршутозиції компонентів 
const router= createBrowserRouter(
    // дозволяє розробити маршрут в стилі jsx
    createRoutesFromElements(
        <Route path='/' element={<Root/>}>
            <Route index element={<Welcome/>}/>
            <Route path='/statehooks' element={<StateHookPage/>}/>
            <Route path='/community' element={<Community/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/resources' element={<Resources/>}/>
            <Route path='users' element={<Users/>}></Route>
            <Route path='users/:userId' loader={loader} element={<UserPage/>} errorElement={<ErrorPage/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Route>
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <RouterProvider router={router}/>
    </>
);

function loader({params}){
    // console.log(params.userId)
    const user = usersData.filter(e=> e.id === params.userId )
    // console.log(user)
    return user[0];
}


