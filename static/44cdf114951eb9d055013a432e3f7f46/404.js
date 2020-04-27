import React from "react"
import { Nav } from "../components/Nav"

const NotFoundPage = () => (
  <div style={{fontFamily: "'Lato', Helvetica, sans-serif"}} className="p-32">
    <h1 className="text-4xl pb-4">Page Not Found</h1>
    <p className="p-1">You've found a page that doesn't exist. You can <a href="." style={{color: "#29c2e8"}}>return home</a>.</p>
  </div>
)

export default NotFoundPage
