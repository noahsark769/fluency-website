import React from "react"

export const A = (props) => (
    <a style={{color: "#29c2e8", textDecoration: "underline"}} {...props}>{props.children}</a>
)