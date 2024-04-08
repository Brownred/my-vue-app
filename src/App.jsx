import userGreeting from "./userGreeting.jsx"


// Our app component ties all components together.
function App() {
  
  return (
    <>
      <userGreeting isLoggedIn={true} username="BroCode"/>
    </>
  )
}

export default App
