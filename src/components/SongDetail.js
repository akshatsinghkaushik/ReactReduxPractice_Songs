import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  console.log(song);
  if (!song) {
    return <div>Select a Song</div>;
  }
  return (
    <div>
      <h3>
        <p>
          Title: {song.title}
          <br />
          Duration: {song.duration}
        </p>
      </h3>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
