import React from "react"
import Picture from "../images/foto-perfil.jpeg"

export default function ProfilePicture() {
    return (
        <div className="profile-picture">
            <img src={Picture} alt="Profile Picture" />
        </div>
    )
}