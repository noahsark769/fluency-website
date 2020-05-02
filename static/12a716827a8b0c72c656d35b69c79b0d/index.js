import React from "react"
import { Nav } from "../components/Nav"
import Image from "../components/Image"
import { StaticKitProvider } from '@statickit/react'
import { useForm, ValidationError } from '@statickit/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("contactForm");  
  if (state.succeeded) {
    return <p>Thanks for signing up! We'll contact you when a beta is available <span role="img" aria-label="Smiley face">🙂</span></p>;
  }
  return (
    <form className="flex flex-col max-w-xl" onSubmit={handleSubmit}>
        <div className="flex flex-col pb-8">
            <label htmlFor="email" className="pb-3 text-gray-700 dark-mode:text-white">
                Email Address
            </label>
            { state.errors.filter((error) => { return error.field === "email" }).length ?
            <div className="p-4 bg-red-200 mb-2">
                <ValidationError
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
            </div> : null }
            <input
                className="bg-gray-200 h-12 rounded-md text-2xl p-4 text-gray-800 dark-mode:text-whites"
                id="email"
                type="email" 
                name="email"
            />
        </div>
        <div className="flex flex-col pb-8">
            <label htmlFor="message" className="pb-3 text-gray-700 dark-mode:text-white">
                (Optional) Tell us what you'd like to use Fluency for
            </label>
            { state.errors.filter((error) => { return error.field === "message" }).length ?
            <div className="p-4 bg-red-200 mb-2">
                <ValidationError
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
            </div> : null }
            <textarea
                className="bg-gray-200 h-24 rounded-md text-xl leading-normal p-4 text-gray-800 dark-mode:text-white"
                id="message"
                name="message"
            />
        </div>
        <button type="submit" disabled={state.submitting} className="p-4 bg-blue-500 text-white rounded-md">
            Join Beta Waitlist
        </button>
    </form>
  );
}

const IndexPage = () => (
    <StaticKitProvider site="701e580f4480">
        <div className="outerWrapper h-screen flex flex-col dark-mode:bg-gray-800 dark-mode:text-white"
            style={{fontFamily: "'Lato', Helvetica, sans-serif"}}>
            <Nav />
            <div className="innerWrapper p-8 md:p-32 md:pt-8">
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
                <ContactForm />
            </div>
        </div>
    </StaticKitProvider>
)

export default IndexPage
