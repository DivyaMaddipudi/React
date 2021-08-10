import React from 'react'
import "./SwipeButtons.css"
import  StarRateIcon from "@material-ui/icons/StarRate";
import ReplayIcon from "@material-ui/icons/Replay"
import CloseIcon from "@material-ui/icons/Close";
import FavouriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";


function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButton__repeat">
                <ReplayIcon fontSize="small"/>
            </IconButton>

            <IconButton className="swipeButton__left">
                <CloseIcon fontSize="small"/>
            </IconButton>

            <IconButton className="swipeButton__star">
                <StarRateIcon fontSize="small"/>
            </IconButton>

            <IconButton className="swipeButton__right">
                <FavouriteIcon fontSize="small"/>
            </IconButton>

            <IconButton className="swipeButton__lightning">
                <FlashOnIcon fontSize="small"/>
            </IconButton> 
        </div>
    )
}

export default SwipeButtons
