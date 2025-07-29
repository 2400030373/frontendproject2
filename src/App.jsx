import { useState } from 'react'
import'./App.css'
import{Link} from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Welcome To KL University</h1>
    <h2>Today's Topic is Introduction To React</h2>
    <h3>Today Date Is 29-07-25</h3>
    <h3>2400030373-JUBER</h3>
    <Link to="/Page1">go to page1</Link>
    <br/><br/><br/>
     <Link to="/Page2">go to page2</Link>
      <br/><br/><br/>
     <Link to="/Page3">go to page3</Link>
    </>
  )

}
export default App


