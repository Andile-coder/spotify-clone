import React from "react";
import "./footer.css";
import {
  PlayCircleOutline,
  SkipPrevious,
  SkipNext,
  Shuffle,
  Repeat,
  PlaylistPlay,
  VolumeDown,
} from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <img
          className="footer_albumLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Usher_Cannes_2016_retusche.jpg/330px-Usher_Cannes_2016_retusche.jpg"
          alt=""
        />
        <div className="song_info">
          <h4>Yeah</h4>
          <p>Usher</p>
        </div>
      </div>
      <div className="footer_center">
        <Shuffle className="footer_green" />
        <SkipPrevious className="footer_icon" />
        <PlayCircleOutline className="footer_icon" fontSize="large" />
        <SkipNext className="footer_icon" />
        <Repeat className="footer_green" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
