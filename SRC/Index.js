import React from 'react'
import ReactDOM from 'react-dom/client'

const TestApp = ()=>{
    return (
        <h1>Hello from testApp</h1>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<TestApp/>)