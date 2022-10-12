
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Main from './Layout/Main';
import QuizDetails from './components/quizDetail/QuizDetails';
import ErrorPage from './components/error-page/ErrorPage';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:() => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path:'/topics',
          element: <Topics></Topics>
        },
        {
           path:'/quiz/:quizId',
           loader : async({params})=>{
            
              return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
           },
           element:<QuizDetails></QuizDetails>
        },
        {
          path:'/statistics',
          element: <Statistics></Statistics>
        },
        {
          path:'/blog',
          element: <Blog></Blog>
        }

      ]
    },
    {
       path:'*', element:<ErrorPage></ErrorPage>
    }
  ])

  // ReactDOM.createRoot(document.getElementById("root")).render(
  //   <React.StrictMode>
  //     <RouterProvider router={router} />
  //   </React.StrictMode>
  // );


  return (
    <div className="App">
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
