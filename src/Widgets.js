import React from 'react'
import './widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
function Widgets() {

    const newsArticle=(heading,subtitle)=>(
        <div className="widgets__article">
            <div className="widgets__articleLeft">
            <FiberManualRecordIcon/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>   
            </div>
        </div>
        );
    

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>
            {newsArticle("React is back","Top news - 9099 readers")}
            {newsArticle("Coronavirus:IND updates","Top news - 9099 readers")}
            {newsArticle("Tesla hist new high","cars & auto - 9099 readers")}
            {newsArticle("bicoin breaks $22k","crypto - 9099 readers")}
            {newsArticle("Is Redux too good?","code - 9099 readers")}
            {newsArticle("Spring boot is booming","Top news - 9099 readers")}

        </div>
    )
}

export default Widgets
