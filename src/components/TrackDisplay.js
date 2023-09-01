import React, { useEffect } from 'react';
import '../modules/Track.css';
import Spotify from '../Spotify'

function TrackDisplay(props) {
    function addTrack() {
        props.onAdd(props.track)
    }

    function removeTrack() {
        props.onRemove(props.track)
    }   

    function createActions() {
        if (props.isRemoval) {
            return (
                <button className="Track-action" onClick={removeTrack}>
                  -
                </button>
            )
        }
        return (
            <button className="Track-action" onClick={addTrack}>
              +
            </button>
        )
    } 

    function handleAudioPlay(event) {
        Spotify.previewTrack(props.track).then((url) => {
            const audioElement = document.getElementById(`track-audio-${props.track.id}`);
            audioElement.src = url;
            audioElement.load()
            audioElement.play().catch((error) => {
                console.log(error)
            })
        })
    }

    function addPreview() {
        if (!props.isRemoval) {
            return (
                <div className={"Track-audio"}>
                <button onClick={handleAudioPlay}>Play Preview</button>
                <audio  id={`track-audio-${props.track.id}`} controls>
                    Audio not supported
                </audio>
                </div>
            )
        }
    }


    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p>
                  {props.track.artist} | {props.track.album}
                </p>
                {addPreview()}
            </div>
            {createActions()}
        </div>
    )
}

export default TrackDisplay;