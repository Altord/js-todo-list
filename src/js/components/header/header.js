import React from 'react';
import ReactDOM from "react-dom";
import '../../../css/header.css';
import 'hamburgers/dist/hamburgers.css';
import homeIco from "../../../imgs/browser.png";
import searchIco from "../../../imgs/search.png"

function sideMenuButton(){
    let menuIcon = document.querySelector('.hamburger')
    return (menuIcon.classList.toggle("is-active"))
}
function homeButton(){
    return
}
function searchButton(){

}

function header(){

    return(
        <div id = "top_bar">
            <div id= "top_inner">
                <div className = "main_menu">
                    <button className="hamburger hamburger--spring" type="button" onClick={sideMenuButton}>
                          <span className="hamburger-box">
                            <span className="hamburger-inner"> </span>
                          </span>
                    </button>
                    <img  id = "home_icon" alt ="homeIco" src={homeIco} onClick={homeButton}/>
                    <div className="search_bar_box" style={{width: 200}}>
                        <img id = "search_icon" alt = "searchIco" src ={searchIco} />
                        <input id = "search_bar" type = "text" alt = "search"/>

                    </div>
                </div>
            </div>
        </div>
    )

}


const titleHead = document.getElementById("header");
ReactDOM.render(header(), titleHead)