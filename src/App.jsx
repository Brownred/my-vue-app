import userGreeting from "./userGreeting.jsx"
import Lists from "./list.jsx"


// Our app component ties all components together.
function App() {

  const fruits = [{ name: 'Apple', calories: 95 },
                  { name: 'Banana', calories: 105 },
                  { name: 'Cherry', calories: 77 },
                  { name: 'Date', calories: 23 },
                  { name: 'Grape', calories: 62 },
                  { name: 'Kiwi', calories: 61 },
                  { name: 'Orange', calories: 62 },
                  { name: 'Peach', calories: 59 },
                  { name: 'Pear', calories: 57 },
                  { name: 'Pineapple', calories: 50 },
                  { name: 'Strawberry', calories: 33 },
                  { name: 'Watermelon', calories: 30 }
  ]
  
  return (
    <>
      <Lists items={fruits} category="Fruits"/>
    </>
  )
}

export default App
