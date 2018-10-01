import React, {Component} from 'react'

class TrackList extends Component {
  render(){
    return (
      <div>
        {this.props.tracks.map((track) => {
          return <div>Track: {track.title}</div>;
        })}
      </div>
    );
  }
}

export default TrackList;
