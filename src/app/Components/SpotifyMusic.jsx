import React from "react";

const SpotifyMusic = () => {
  return (
    <>
      <div style={{ width: "90vw", margin: " 200px auto 0", }} className="spotify">
        <div style={{fontSize:"2vw", color:"white", fontWeight:"thin", margin:"20px"}}>Songs That give me chill</div>
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/476QAy3PeoZFwzyYCY0imQ?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default SpotifyMusic;
