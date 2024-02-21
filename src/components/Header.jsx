import { Link } from "react-router-dom";

const Header = () => {

    const NavMenu = <>


        <li><Link className='text-sm  font-bold' to="/simple">Simple Animation</Link></li>

        <li><Link className='text-sm  font-bold' to="/keyframe">Keyframe Animation</Link></li>
        <li><Link className='text-sm  font-bold' to="/button">Button Tap Animation</Link></li>
        <li> <Link className='text-sm  font-bold' to="/text-motion">Text Motion Animation</Link></li>
        <li><Link className='text-sm  font-bold' to="/transition">Transition Type Animation</Link></li>
        <li><Link className='text-sm  font-bold' to="/counter">Counter Animation</Link></li>
        <li> <Link className='text-sm  font-bold' to="/scroll">Scroll Reveal Animation</Link></li>
        <li><Link className='text-sm  font-bold' to="/variants">Variants</Link></li>

        <li className='text-2sm flex flex-col'>


        </li>


    </>

    return (
        <div className="navbar bg-base-300 px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52 shadow-lg">
                        {NavMenu}
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to="/" className="btn btn-ghost text-xl font-bold font-serif">Framer Motion.</Link>
            </div>
            <div className="navbar-end">

                <a className="font-bold" href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer">Docs</a>

                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <a target="-black" href="https://www.facebook.com/ilhan.khondaker"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>

                    </div>

                </button>
            </div>
        </div>
    );
};


export default Header;