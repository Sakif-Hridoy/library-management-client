import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import AddBook from './components/AddBook.jsx';
import AllBooks from './components/AllBooks.jsx';
import UpdateBook from './components/UpdateBook.jsx';
import CategoryDetails from './components/CategoryDetails.jsx';
import BookDetails from './components/BookDetails.jsx';
import BorrowedBooks from './components/BorrowedBooks.jsx';
import AuthProviders from './components/providers/AuthProviders.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/addBook',
        element:<PrivateRoute><AddBook></AddBook></PrivateRoute>,
      },
      {
        path:'/allBooks',
        element:<PrivateRoute><AllBooks></AllBooks></PrivateRoute>,
        // loader:()=> fetch('http://localhost:5000/books')
      },
      {
        path:'/updateBook/:id',
        element:<UpdateBook></UpdateBook>,
        loader:({params})=>fetch(`http://localhost:5000/book/${params.id}`)
      },
      {
        path:'/categoryDetails/:categoryName',
        element:<CategoryDetails></CategoryDetails>,
        loader:()=>fetch("http://localhost:5000/books")
      },
      {
        path:'/bookDetails/:id',
        element:<PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
        loader:()=>fetch("http://localhost:5000/booksCategories")
      },
      {
        path:'/borrowedBooks',
        element:<PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>,
        loader:()=>fetch("http://localhost:5000/borrowedBooks")
      },
      {
        path:"/login",
        element:<Login></Login>,
      },
      {
        path:"/register",
        element:<Register></Register>,
      },
      
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders><RouterProvider router={router} /></AuthProviders>
  </React.StrictMode>,
)
