import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import { About } from './pages/About';
import { Courses } from './pages/Courses';
import { Ilets } from './pages/Ilets';
import { CoursesList } from './component/CouresList';
import { Cards } from './component/Cards';
import { PTEcourse } from './pages/PTEcourse';
import { SecondCard } from './component/SecondCards';
import { TOEFLcourse } from './pages/TOEFLcourse';
import { DUOLINGOcourse } from './pages/DUOLINGOcourse';
import { Footer } from './component/Footer';
import { Spoken } from './pages/Spoken';
import { SignInForm } from './pages/SignInForm';
import { SignUp } from './pages/SignUp';
import { DashBoard } from './pages/DashBoard';






function App() {
    return (
        <>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>      
                    <Route path='/courses' element={<Courses/>}/>       
                    <Route path='/ilets' element={<Ilets/>}/>  
                    <Route path='/courselist' element={<CoursesList/>}/>  
                    <Route path='/cards' element={<Cards/>}/> 
                    <Route path='/ptecourse' element={<PTEcourse/>}/> 
                    <Route path='/second' element={<SecondCard/>}/> 
                    <Route path='/toeflcourse' element={<TOEFLcourse/>}/>
                    <Route path='/duolingocourse' element={<DUOLINGOcourse/>}/>
                    <Route path='/footer' element={<Footer/>}/>
                   {/*  <Route path='/secourse' element={<secourse/>}/>*/}
                   <Route path='/spoken' element={<Spoken/>}/>
                   <Route path='/signin' element={<SignInForm/>}/>
                   <Route path='/signup' element={<SignUp/>}/>
                   <Route path='/dashboard' element={<DashBoard/>}/>

                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

