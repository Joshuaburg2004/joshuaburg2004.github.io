import './header.css';
import logo from './logo.jpg';
export default
function Header() {
    return (
        <header className='Header'>
            <h2>
                <img src={logo} className="App-logo" alt="logo" />
                Portfolio from Joshua van der Burg
            </h2>
        </header>
    );
}