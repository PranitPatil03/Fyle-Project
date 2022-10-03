import React from 'react'

export const Searchuser = () => {
    return (
        <>
            <div className="user">                
                <form action="POST" class="userform" id="form">
                    <input type="text" name="username"  id="username" placeholder="Search a Github User"/>
                </form>
            </div>

        </>
    )
}
