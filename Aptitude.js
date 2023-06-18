import './project.css';
import { useNavigate } from "react-router-dom"
const Aptitude =()=>{
        let nav=useNavigate()
    const goh =()=>{
        nav('/Home')
    }
    const goc =()=>{
        nav('/Courses')
    }
    const goa =()=>{
        nav('/Courses/Aptitude')
    }
    const reas =()=>{
        nav('/Courses/Reasoning')
    }
    const ver =()=>{
        nav('/Courses/Verbal_Ebility')
    }
    const tech =()=>{
        nav('/Courses/Technical_Languages')
    }
    const inter =()=>{
        nav('/Interview_Prep')
    }
    const about =()=>{
        nav('/About')
    }
    const contact =()=>{
        nav('/Contac_Us')
    }
    return(
        <div className="bg6">
            <div className='beside'><h1 className='h1'>| Tech Feild | <sub>Learn Upto Technical</sub></h1></div>
            <div className='beside1'><input type='search' placeholder='search here...' className='search'></input></div>
            <div className='bg'>
            <ul>
                <li onClick={goh}>Home</li>
                <li onClick={goc}>courses</li>
                <li onClick={inter}>Interview Prep</li>
                <li onClick={about}>About</li>
                <li onClick={contact}>Contact us</li>
            </ul>
            <div className='bg10'><button className='bg9'></button></div>
            </div>
            <div>
            <div className='bg2'>
                <h2>APTITUDE</h2><br></br>
                <ol className='bg3'>
                    <li>Aptitude</li><br></br>
                    <li>Reasoning</li><br></br>
                    <li>Verbal Ebility</li><br></br>
                    <li>Tech Languages</li><br></br>
                    <li></li>
                </ol>
            </div>
        
            <div className='bg7'>
                <h1>Aptitude</h1>
            </div>
            </div>
        </div>
    )
}
export default Aptitude;