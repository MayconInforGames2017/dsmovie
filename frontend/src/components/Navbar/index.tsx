import './styles.css';

import { ReactComponent as GithubIcon } from 'assets/img/github.svg';

function Navbar() {

    return (
        <header>
            <nav className='container'>
                <div className='dsmovie-nav-content'>
                    <h1>MayconInforgamesMovie</h1>
                    <a href="https://github.com/MayconInforGames2017">
                        <div className='dsmovie-contact-conteiner'>
                            <GithubIcon />
                            <p className='dsmovie-contact-link'>/MayconInforgames</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;