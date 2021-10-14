import "./Header.css"
import {changeLog} from "./changelog"
import Slide from 'react-reveal/Slide'
import {memo} from "react";

function Header() {

    let randomInfo = ['version', 'subjects', 'posts']
    let userNotification

    let showNow = randomInfo[Math.floor(Math.random() * randomInfo.length)]

   


    return (
        <Slide top>
            <div className="row valign-wrapper">
                <div className="col s12 m12 l12 hide-on-med-and-up center-align">
                    <img src="logo.png"/> <span className="logo-text blue-text">Заметки</span>
                </div>
                <div className="col s12 m6 l6 left-align grey-text hide-on-small-only">
                    <img src="logo.png"/> <span className="logo-text blue-text">Заметки</span>
                </div>
                <div className="col s12 m6 l6 right-align hide-on-small-only grey-text">
                    {userNotification}
                </div>
            </div>
        </Slide>)
}

export default memo(Header)