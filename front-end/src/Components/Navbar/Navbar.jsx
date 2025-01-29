const Navbar = (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg py-3">
                <div className="container-fluid">
                    <div className="nav-img">
                        <img src={props.menuIcon} className="pointer" alt="" />
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link" href="#">Features</a>
                            <a className="nav-link" href="#">Pricing</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
