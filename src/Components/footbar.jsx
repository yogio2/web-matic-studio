import './StyleJS/footbar.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'

const FootBar = () => {
    return (
        <footer className="footbar">
            <div className="smaller">
                <h1 className="logo smaller">WEB MATIC <span>STUDIO</span></h1>
                <h5 style={{textAlign:'center', letterSpacing:".5em"}}>Above and Beyond</h5>
            </div>
            <table className="footTable">
                <tbody>
                <tr>
                    <th>Quick Links</th>
                    <th style={{textAlign:'left'}}>Connect with Us</th>
                </tr>
                <tr>
                    <td><NavLink to={'/projects'} className='footerLinks'>Projects</NavLink></td>
                    <td style={{textAlign:'left'}}><FontAwesomeIcon icon={faPhone} /> +91 95119 76919</td>
                </tr>
                <tr>
                    <td><NavLink to={'/services'} className='footerLinks'>Services</NavLink></td>
                    <td style={{textAlign:'left'}}><FontAwesomeIcon icon={faEnvelope} /> Siddharthbhowmick@gmail.com</td>
                </tr>
                <tr>
                    <td><NavLink to={'/Creatives'} className='footerLinks'>Creatives</NavLink></td>
                    <td style={{textAlign:'left'}}> <img src="src\Components\Media\bitmap.svg" style={{height:'20px'}} alt="logo" /> <NavLink to={'/'} className='footerLinks'> Web Matic Studio</NavLink></td>
                </tr>
                <tr>
                    <td><NavLink to={'/contact'} className='footerLinks'>Contact</NavLink></td>
                </tr>
                </tbody>
            </table>
        </footer>
    );
};

export default FootBar;