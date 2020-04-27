import React from "react"
import { FaTwitter } from "react-icons/fa";

const Nav = () => (
    <div className="flex flex-row-reverse p-6">
        <a className="hover:bg-gray-200 p-2 rounded-sm" href="https://twitter.com/getfluencyapp"><FaTwitter color={"#29c2e8"} size="24" /></a>
    </div>
)

const IndexPage = () => (
    <div className="outerWrapper flex flex-col" style={{fontFamily: "'Lato', Helvetica, sans-serif"}}>
        <Nav />
        <div className="innerWrapper p-32">
            <div>Fluency</div>
            <h1 className="font-black">Pro macOS app for Confluence Server</h1>
        </div>
    </div>
)

export default IndexPage
