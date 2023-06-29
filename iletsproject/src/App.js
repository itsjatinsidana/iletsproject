import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import { About } from './pages/About';
import { Courses } from './pages/Courses';
import { CourseDetail } from './pages/CourseDetail';
import { CoursesList } from './component/CouresList';



function App() {
    return (
        <>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>      
                    <Route path='/courses' element={<Courses/>}/>       
                    <Route path='/coursedetail' element={<CourseDetail/>}/>  
                    <Route path='/courselist' element={<CoursesList/>}/>  
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

