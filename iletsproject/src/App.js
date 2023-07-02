import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import { About } from './pages/About';
import { Courses } from './pages/Courses';
import { CourseDetail } from './pages/CourseDetail';
import { CoursesList } from './component/CouresList';
import { Cards } from './component/Cards';
import { PTEcourse } from './pages/PTEcourse';
import { SecondCard } from './component/SecondCards';
import { TOEFLcourse } from './pages/TOEFLcourse';
import { DUOLINGOcourse } from './pages/DUOLINGOcourse';





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
                    <Route path='/cards' element={<Cards/>}/> 
                    <Route path='/ptecourse' element={<PTEcourse/>}/> 
                    <Route path='/second' element={<SecondCard/>}/> 
                    <Route path='/toeflcourse' element={<TOEFLcourse/>}/>
                    <Route path='/duolingocourse' element={<DUOLINGOcourse/>}/>
                    

                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

