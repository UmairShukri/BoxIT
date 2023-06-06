import { useState } from 'react'

import './App.css'
import ShippingPage from './ShippingPage'
// index.js or App.js
import 'tailwindcss/tailwind.css';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
<ShippingPage/>
   </div>
  )
}

export default App
