import React from "react";
import NavBar from "../NavBar";
import "./Welcome.css";
import Card from '../Card'
import { Link } from "react-router-dom";

export default function Welcome(props) {
    return (
        <div className='welcomeContainer'>
            <NavBar text="noDisplay" button="noDisplay" />
            <div className='dashboardContainer'>
                <div className="welcome"> <Link to='/home'> <div className='dashboard'><i class="fas fa-home welomeIcon"></i> Dashboard</div></Link>
                    <Link to='/complaints'> <div><i class="fas fa-hospital-user welomeIcon"></i> Complaints</div></Link>
                    <Link to='/'> <div className='logOut'><i class="fas fa-sign-out-alt welomeIcon"></i>Logout <span>{localStorage.getItem('username')}</span></div></Link>
                </div>

                <div className='cardsGrid'>
                    <Card className='card card1' headerText='Total Income' amountText='$ 575,000' savedText='Saved 25%' /> <Card className='card card2' headerText='Total Expenses' amountText='$ 79,000' savedText='Saved 25%' /> <Card className='card card3' headerText='Cash on Hand' amountText='$ 92,000' savedText='Saved 25%' /> <Card className='card card4' headerText='Net Profit Margin' amountText='$ 179,000' savedText='Saved 65%' />
                </div>
            </div>

        </div>
    );
}
