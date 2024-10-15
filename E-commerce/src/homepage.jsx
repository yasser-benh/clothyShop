import Products from './Components/Data/Products'
import Navbar from './navbar/navbar'
import { Route , Routes } from 'react-router-dom'



function Homepage() {

  const routeArr = [ 
    { 
        path:'/',
        element:<Products type ='all'/>
    },
    { 
        path:'/home',
        element:<Products type ='all'/>
    },
    { 
        path:"/men'sclothing",
        element:<Products type ="men's clothing"/>
    },
    { 
        path:'/jewelery',
        element:<Products type ='jewelery'/>
    },
    
    {
        path:'/electronics',
        element:<Products type ='electronics'/>,
    
    },
    {
        path:"/women'sclothing",
        element:<Products type ="women's clothing"/>,
        
    }
]
 

  return (<main className='main-container'>
    <header className='navbar'>
      <Navbar/>
    </header>
    <section className='products-containner'>
        <Routes>

          {
          routeArr.map((route)=><Route path={route.path} element={route.element}/>)
          }
          </Routes>
      </section>

    </main> )
}

export default Homepage
