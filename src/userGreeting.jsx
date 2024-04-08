import propTypes from 'prop-types';


function userGreeting(props) {
    
    return (props.isLoggedIn ? <h1>Welcome back, {props.username}!</h1> : <h1>Welcome, Guest!</h1>)
}

userGreeting.propTypes = {
    isLoggedIn: propTypes.bool.isRequired,
    username: propTypes.string.isRequired
}

userGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}

export default userGreeting

