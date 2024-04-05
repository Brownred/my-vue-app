// we will be working with function based componenets

function Header() {

    return (
        // you can write pure html code here
        // react components are only capable of returning a single element
        // so we wrap everything in a div (we can use child elements within)
        <header>
            <h1>My Website</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );
}

// we would like to export this component so that we can use it in other files
export default Header