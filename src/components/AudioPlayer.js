import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Transform } from 'stream';
import {secondstotime} from '../helpers/index.js';

export default class AudioPlayer extends Component {
    
    static propTypes = {
        file: PropTypes.string
    }

    constructor(props){
        super(props)
        this.state = {
            isPlaying: false,
            volume: 0.5,
            speed: 1,
            progress: 0,
            duration: null,
            currentTime: null
        }
    }

    componentDidMount(){
        const audio = this.audioEl;
        const progress = this.progressEl;
        audio.addEventListener('timeupdate', this.handleProgress);
        progress.addEventListener('click', this.scrub);
        progress.addEventListener('mousemove', (e) => this.mousedown && this.scrub(e));
        progress.addEventListener('mousedown', () => this.mousedown = true);
        progress.addEventListener('mouseup', () => this.mousedown = false);
        // Get duration of the song and set it as max slider value
		audio.onloadedmetadata = function() {
			this.setState({duration: secondstotime(audio.duration)});
		}.bind(this);
    }

    togglePlay = () => {
        const audio = this.audioEl;
        if(audio.paused){
            audio.play();
            this.setState({
                isPlaying: true
            })
        } else {
            audio.pause();
            this.setState({
                isPlaying: false
            })
        }
    }

    handleRangeUpdate = (e) => {
        const audio = this.audioEl;
        const {value, name} = e.target;
        
        if(name === "volume"){
            audio.volume = value;
            this.setState({
                volume: value
            })
        }
        if(name === "speed"){
            audio.playbackRate = value
            this.setState({
                speed: value
            })
        }
    }

    handleProgress = () => {
        const audio = this.audioEl;
        const progress = audio && (audio.currentTime / audio.duration);
        audio && this.setState({
            progress,
            currentTime: secondstotime(audio.currentTime)
        })
    }
    
    scrub = (e) => {
        const progress = this.progressEl;
        const audio = this.audioEl;
        const scrubTime = (e.offsetX / progress.offsetWidth) * audio.duration;
        audio.currentTime = scrubTime || 0;
    }

    render() {
        const {file} = this.props;
        const {isPlaying, volume, speed, progress, duration, currentTime} = this.state;
        const progressStyle = { 
            transform: `scaleX(${progress})` 
        };
        return (
            <div className="player">
                <audio ref={(ref) => { this.audioEl = ref; }} className="player__audio viewer" preload="metadata">
                    <source src={file} type="audio/mp3" />
                </audio>
                <div className="player__controls">
                    <button className={isPlaying ? 'btn-pause' : 'btn-play'} onClick={this.togglePlay}></button>
                    <div className="time">
                        <div className="progress" ref={(ref) => { this.progressEl = ref; }}>
                            <div className="progress__fill" style={progressStyle} />
                        </div>
                        <p>
                            <span>
                                {currentTime || '00:00:00'} / {duration || '00:00:00'}
                            </span>
                            <span className="speed__controls">
                                Speed {speed} <input onChange={this.handleRangeUpdate} type="range" name="speed" className="player__slider" min="0.5" max="2" step="0.1" value={speed} />
                            </span>
                        </p>
                        {/* <input onChange={this.handleRangeUpdate} type="range" name="volume" className="player__slider" min="0" max="1" step="0.05" value={volume} /> */}
                        
                    </div>
                </div>
            </div>
        )
    }
}
