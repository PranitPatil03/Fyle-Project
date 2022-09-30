import React from 'react'
import { RepoDetails } from './RepoDetails'



export default function UserDetails() {
    
return (
    <>
    <div className="containeruserprofile">
        <div className="userprofile">
            <div className="image">
                <img className="userimage" src="https://avatars.githubusercontent.com/u/91155068?v=4" alt="" />
            </div>
            <div className="userdetails">
                <div className="username">
                    <p>Pranit Patil</p>
                </div>
                <div className="bio">
                    <p>cse student</p>
                </div>
                <div className="location">
                    <p>mumbai</p>
                </div>
                <div className="social">
                    <p>twitter</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
