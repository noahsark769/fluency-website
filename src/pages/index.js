import React from "react"
import { Nav } from "../components/Nav"
import Image from "../components/Image"
import { StaticKitProvider } from '@statickit/react'
import { useForm, ValidationError } from '@statickit/react';
import styled from "styled-components";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";

function ContactForm() {
  const [state, handleSubmit] = useForm("contactForm");  
  if (state.succeeded) {
      return <div>
          <p className="pb-8">Thank you! Click the button below to start download.</p>
        <button onClick={ () => {
            window.location.href = "https://github.com/noahsark769/fluency-appcasts/releases/download/0.0.20/Fluency.0.0.20.dmg";
        }} disabled={state.submitting} className="p-4 bg-blue-500 text-white rounded-md">
            Download
        </button>
      </div>
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
                className="bg-gray-200 h-12 rounded-md text-2xl p-4 text-gray-800"
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
                className="bg-gray-200 h-24 rounded-md text-xl leading-normal p-4 text-gray-800"
                id="message"
                name="message"
            />
        </div>
        <button type="submit" disabled={state.submitting} className="p-4 bg-blue-500 text-white rounded-md">
            Download
        </button>
    </form>
  );
}

const InnerContainer = styled.div`
    @media screen and (min-width: 768px) {
        min-width: 550px;
    }
`;

class IndexPage extends React.Component {
    componentDidMount() {
        ReactGA.initialize('UA-165585096-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    render() {
        return (<StaticKitProvider site="701e580f4480">
            <Helmet>
                <title>Fluency: macOS Confluence Editor</title>
            </Helmet>
            <div className="outerWrapper h-screen flex flex-col dark-mode:bg-gray-800 dark-mode:text-white"
                style={{fontFamily: "'Lato', Helvetica, sans-serif"}}>
                <Nav />
                <div className="innerWrapper pl-8 pt-8 pb-8 md:p-32 md:pt-8 flex flex-row">
                    <InnerContainer className="pr-0 md:pr-8" style={{maxWidth: "100%"}}>
                        <div className="pr-8 md:pr-0">
                            <div className="flex flex-row items-center justify-start pb-4"> 
                                <div style={{width: "40px", height: "40px"}}><Image filename="logo.png" /></div>
                                <div className="text-2xl pl-4">Fluency</div>
                            </div>
                            <h1 className="font-black text-5xl pb-5">macOS Confluence Editor</h1>
                            <ul className="text-lg pl-8 pb-8" style={{listStyleType: "disc"}}>
                                <li className="p-1">Works with self-hosted Confluence Server</li>
                                <li className="p-1">Fast, local search for only the spaces you need</li>
                                <li className="p-1">Create and publish pages with real Markdown</li>
                                <li className="p-1">View local pages without signing in</li>
                                <li className="p-1">Copy links to headings in one click</li>
                            </ul>
                            <button onClick={ () => {
                                window.location.href = "https://github.com/noahsark769/fluency-appcasts/releases/download/0.2.2/Fluency.0.2.2.dmg";
                            }} className="p-4 bg-blue-500 text-white rounded-md">
                                Download Fluency Beta for macOS
                            </button>
                        </div>
                        <div className="block md:hidden pt-8" style={{maxWidth: "100%", overflow: "hidden"}}>
                            <div style={{position: "relative", width: "170%", overflow: "hidden"}}>
                                <Image filename="screenshot.png" />
                            </div>
                        </div>
                    </InnerContainer>
                    <div className="hidden md:block">
                        <div style={{width: "1000px"}}>
                            <Image filename="screenshot.png" />
                        </div>
                    </div>
                </div>
            </div>
        </StaticKitProvider>);
    }
}

export default IndexPage
