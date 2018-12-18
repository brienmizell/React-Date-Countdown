import React, { Component } from "react";
import "./App";

class Profile extends Component {
  render() {
    console.log("this.props", this.props);
    let artist = {
      name: "",
      followers: { total: "" },
      images: [{ url: "" }],
      genres: []
    };
    if (this.props.artist !== null) {
      artist = this.props.artist;
    }

    artist = this.props.artist !== null ? this.props.artist : artist;
    return (
      <div className="profile-info">
        <img alt="Profile" className="profile-img" src={artist.images[0].url} />
        <div className="profile.name">{artist.name}</div>
        <div className="profile.followers">
          {artist.followers.total} followers
        </div>
        <div className="profile-genres">
          {artist.genres.map((genre, index) => {
            genre =
              genre !== artist.genres[artist.genres.length - 1]
                ? ` ${genre},`
                : ` & ${genre}`;
            return (
              <span className="genre" key={index}>
                {genre}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Profile;
