import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router'



/* Pages */
import HomePage from '../pages/home/HomePage.tsx'
import LinkTreePage from '../pages/LinkTreePage.tsx'

/* Rotas */
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/tree",
    element: <LinkTreePage/>
  }
]);

const element = document.getElementById('root')

if(element){
  createRoot(element).render(
    <RouterProvider router={router}/>
  )
}
else{
  window.alert('Elemento "root" não encontrado')
}