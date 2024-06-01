import './StyleJS/footbar.css'
import { NavLink, useNavigate } from 'react-router-dom';

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
                    <th>Menu</th>
                    <th>Connect with Us</th>
                </tr>
                <tr>
                    <td><NavLink to={'/services'} className='footerLinks'>Services</NavLink></td>
                    <td>Facebook</td>
                </tr>
                <tr>
                    <td><NavLink to={'/projects'} className='footerLinks'>Projects</NavLink></td>
                    <td>LinkedIn</td>
                </tr>
                <tr>
                    <td><NavLink to={'/Creatives'} className='footerLinks'>Creatives</NavLink></td>
                    <td> <a href=""></a> Instagram</td>
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