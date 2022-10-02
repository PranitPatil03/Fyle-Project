/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

export default function footer() {
    return (
        <>
            <div className="box">
                <div className="boxitems leftarrow"><img src="https://img.icons8.com/material-rounded/24/000000/rewind.png"/></div>
                <div className="boxitem1 boxitems">1</div>
                <div className="boxitem2 boxitems">2</div>
                <div className="boxitem3 boxitems">3</div>
                <div className="boxitem4 boxitems">4</div>
                <div className="boxitem5 boxitems">5</div>
                <div className="boxitem6 boxitems">6</div>
                <div className="boxitem7 boxitems">7</div>
                <div className="boxitem8 boxitems">8</div>
                <div className="boxitem9 boxitems">9</div>
                <div className="boxitems rightarrow"><img src="https://img.icons8.com/material-rounded/24/000000/fast-forward.png"/></div>
            </div>
            <div className="buttons">
                <div className="back">
                <img class="backimg" src="https://img.icons8.com/material-rounded/24/000000/long-arrow-left.png"/>
                    <p className="older">older</p>
                </div>
                <div className="forward">
                <img class="forwardimg" src="https://img.icons8.com/material-rounded/24/000000/long-arrow-right.png"/>
                    <p className="newer">newer</p>
                </div>
            </div>
        </>
    )
}
