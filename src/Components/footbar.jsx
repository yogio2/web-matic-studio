import './StyleJS/footbar.css'

const FootBar = () => {
    return (
        <footer className="footbar">
            <div className="smaller">
                <h1 className="logo smaller">WEB MATIC <span>STUDIO</span></h1>
                <p style={{textAlign:'center'}}>Above and Beyond</p>
            </div>
            <table className="footTable">
                <tbody>
                <tr>
                    <th>Services</th>
                    <th>Company</th>
                    <th>Connect with Us</th>
                </tr>
                <tr>
                    <td>Service 1</td>
                    <td>Blog</td>
                    <td>X</td>
                </tr>
                <tr>
                    <td>Service 2</td>
                    <td>Abou Us</td>
                    <td>LinkedIn</td>
                </tr><tr>
                    <td>Service 3</td>
                    <td>Careers</td>
                    <td>Instagram</td>
                </tr><tr>
                    <td>Service 4</td>
                    <td>Privacy Policy</td>
                    <td>Facebook</td>
                </tr>
                </tbody>
            </table>
        </footer>
    );
};

export default FootBar;