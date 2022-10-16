import React from 'react'
import { Button, ButtonGroup } from '@salesforce/design-system-react'
export default function Footer() {
  return (
    <>
      <div id="footer">
        <div style={{ paddingTop: "5px", paddingBottom: "5px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", color: "white", backgroundColor: "#16325c" }}>
          <p style={{ paddingRight: "20px" }}>© 2022 by Tejas M R</p>
          <ButtonGroup>
            <Button style={{ backgroundColor: "#0073b1", color: "white" }} onClick={() => {
              window.location.href = "https://linkedin.com/in/tejas-m-r";
            }}>
              <i style={{ fontSize: "20px", paddingTop: "3px", paddingBottom: "3px" }} class='fa fa-linkedin'></i>
            </Button>
            <Button style={{ backgroundColor: "#24292f", color: "white" }} onClick={() => {
              window.location.href = "https://github.com/tejasmr";
            }}>
              <i style={{ fontSize: "20px", paddingTop: "3px", paddingBottom: "3px" }} class='fa fa-github'></i>
            </Button>
            <Button style={{ backgroundColor: "#338ccc", color: "white" }} onClick={() => {
              window.location.href = "https://twitter.com/MrTejasMR"
            }}>
              <i style={{ fontSize: "20px", paddingTop: "3px", paddingBottom: "3px" }} class='fa fa-twitter'></i>
            </Button>
          </ButtonGroup>
          <p style={{ paddingLeft: "20px" }}>Email: <a href="mailto: tejasmr@outlook.com">tejasmr@outlook.com</a>
          </p>
        </div>
      </div>
    </>
  )
}
