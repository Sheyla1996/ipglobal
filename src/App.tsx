import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import NavBar  from './components/navbar/navbar';

const Home = lazy(() => import('./pages/home/home'));
const Search = lazy(() => import('./pages/search/search'));
const Detail = lazy(() => import('./pages/detail/detail'));
const MyList = lazy(() => import('./pages/mylist/mylist'));

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="my-24 mx-8">
          <Routes>
            <Route path='/*' element={<Suspense fallback={<>...</>}> <Home /></Suspense>} />
            <Route path='/search' element={<Suspense fallback={<>...</>}> <Search /></Suspense>} />
            <Route path='/detail/:id' element={<Suspense fallback={<>...</>}> <Detail /></Suspense>} />
            <Route path='/mylist' element={<Suspense fallback={<>...</>}> <MyList /></Suspense>} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
