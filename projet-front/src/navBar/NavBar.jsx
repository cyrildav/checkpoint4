import React from 'react'
import Activity from '../components/Activity'
import Calendrier from '../components/Calendar';
import Photos from '../components/Photos';
import Home from '../components/Home';
import './NavBar.css'
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";


function NavBar() {
    return (
        <BrowserRouter>
            <nav>
                <ul className="navbar">
                    <li><NavLink activeClassName="active" exact to='/' >Accueil</NavLink></li>
                    <li><NavLink activeClassName="active" to='/activites' >activités</NavLink></li>
                    <li><NavLink activeClassName="active" to='/photos' >Photos</NavLink></li>
                    <li><NavLink activeClassName="active" to='/dispo' >Disponibilités</NavLink></li>
                </ul>
            </nav>
            <div className="conteneur">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/activites" component={Activity} />
                    <Route path="/photos" component={Photos} />
                    <Route path="/dispo" component={Calendrier} />
                </Switch>
            </div>

        </BrowserRouter>
    )
}

export default NavBar
