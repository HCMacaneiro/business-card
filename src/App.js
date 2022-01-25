import React from "react"
import ProfilePicture from "./components/ProfilePicture"
import ContactInfo from "./components/ContactInfo"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div className="wrap-container">
            <ProfilePicture />
            <ContactInfo />
            <Footer />
        </div>
    )
}