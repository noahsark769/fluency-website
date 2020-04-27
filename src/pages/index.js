import React from "react"
import { Nav } from "../components/Nav"
import Image from "../components/Image"

const IndexPage = () => (
    <div className="outerWrapper flex flex-col" style={{fontFamily: "'Lato', Helvetica, sans-serif"}}>
        <Nav />
        <div className="innerWrapper p-32">
            <div className="flex flex-row items-center justify-start pb-4"> 
                <div style={{width: "40px", height: "40px"}}><Image filename="logo.png" /></div>
                <div className="text-2xl pl-4">Fluency</div>
            </div>
            <h1 className="font-black text-5xl pb-5">Pro macOS app for Confluence Server</h1>
            <ul className="text-lg pl-8 pb-8" style={{listStyleType: "disc"}}>
                <li className="p-1">Fast, local search for only the spaces you need</li>
                <li className="p-1">Create and publish pages with real Markdown</li>
                <li className="p-1">View local pages without signing in</li>
                <li className="p-1">Copy links to headings in one click</li>
            </ul>
            <button disabled className="p-4 bg-blue-300 text-white rounded-md">Waitlist signup coming soon</button>
        </div>
    </div>
)

export default IndexPage
