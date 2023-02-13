function Header(props) {
    return (

        <header>

            <h2>Dan Shipp </h2>
            <h2>Front End Web Developer</h2>
            <h2>Portfolio</h2>
            <h2>{props.brand}</h2>

            <nav>
                <button onClick={() => props.setPage('home')}>About Me</button>
                <button onClick={() => props.setPage('projects')}>My Projects</button>
                <button onClick={() => props.setPage('contact')}>Contact Me</button>
            </nav>

        </header>

    )
}

export default Header;

// on click function to take the current page prop from App.js and change it to change the page