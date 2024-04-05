// we are creating a function based componenet called Footer
// this component will return the footer of our website

function Footer() {
    
    return(
        <footer>
            <p>&copy; {new Date().getFullYear()} My Website</p>
        </footer>
    );
}

export default Footer