import React from 'react';
import ReactDOM from "react-dom";
import '../css/header.css';
import '../css/side-menu.css'
import 'hamburgers/dist/hamburgers.css';
import homeIco from "../imgs/browser.png";



function SideMenuButton(){
    let menuIcon = document.querySelector('.hamburger')
    menuIcon.classList.toggle("is-active")
    let sideMenu = document.querySelector('.sidebar')
        sideMenu.classList.toggle("menu-show")
}

function HomeButton(){
    return
}


function Header(){
    return(
        <div id = "top_bar">
            <div id= "top_inner">
                <div className = "main_menu">
                    <button className="hamburger hamburger--spring" type="button" onClick={SideMenuButton}>
                          <span className="hamburger-box">
                            <span className="hamburger-inner"> </span>
                          </span>
                    </button>
                    <img  id = "home_icon" alt ="homeIco" src={homeIco} onClick={HomeButton}/>

                    <div className="search_bar_box" >
                       <form id = "search_bar">
                        <input  className={"main-search"} type = "text" alt = "search"/>
                       </form>
                    </div>
                </div>
            </div>
        </div>
    )

}


const titleHead = document.getElementById("header");
ReactDOM.render(Header(), titleHead)