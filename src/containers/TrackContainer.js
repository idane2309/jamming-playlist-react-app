import React, { useState, useEffect } from 'react';
import TrackDisplay from '../components/TrackDisplay';

function TrackContainer(props) {

    return (
        <TrackDisplay 
        track = {props.track}
        onRemove = {props.onRemove}
        onAdd = {props.onAdd}
        isRemoval = {props.isRemoval}
        />
    )
}

export default TrackContainer;