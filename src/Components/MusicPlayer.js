import React, {useEffect, useRef, useState} from 'react';
import Icon from '../Assets/Svg/Icon';
import {colors} from '../constants';
import secondToMin from '../hooks/secondToMin';
import AppText from './AppText';
import './MusicPlayer.css';

const MusicPlayer = ({url, musicName}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(10);
  const [isMute, setIsMute] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);

  const audio = useRef();
  const intervalRef = useRef();

  useEffect(() => {
    if (audio.current) {
      const result = audio.current.duration;
      setDuration(result);
    }
  }, [duration]);

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : '0%';
  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audio.current.ended) {
        console.log('End');
      } else {
        setTrackProgress(audio.current.currentTime);
      }
    }, [1000]);
  };

  const toggle = () => setIsPlaying(!isPlaying);
  const mute = () => {
    isMute ? (audio.current.muted = false) : (audio.current.muted = true);
    setIsMute(!isMute);
  };
  const stop = () => {
    if (audio.current) {
      audio.current.load();
      setIsPlaying(false);
    }
  };

  const currentTime = secondToMin(trackProgress);
  const fullTime = secondToMin(duration);

  useEffect(() => {
    if (isPlaying) {
      audio.current.play();
      startTimer();
    } else {
      audio.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const onScrub = value => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audio.current.currentTime = value;
    setTrackProgress(audio.current.currentTime);
  };
  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  return (
    <div className="w-full sm:w-2/3 lg:w-1/2 xl:w-1/3">
      <audio ref={audio}>
        <source src={url} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div>
        <h3 className="text-sm text-gray-50 font-medium">{musicName}</h3>
      </div>
      <div
        style={{backgroundColor: colors.grey1}}
        className="grid grid-cols-11 shadow-lg rounded-lg">
        <div className="col-span-1 ">
          <div className="grid grid-cols-2 gap-4 items-end h-full">
            <Icon
              onClick={toggle}
              name={isPlaying ? 'pause' : 'play'}
              className=" text-indigo-500 w-8  hover:text-indigo-400"
            />

            <Icon
              name="stop"
              onClick={stop}
              className=" text-indigo-500 w-8 hover:text-indigo-400"
            />
          </div>
        </div>
        <div className="mx-8 col-span-10">
          <div className="grid grid-cols-12 justify-center items-end w-full">
            <div className="relative mb-5 col-span-11">
              <div
                style={{width: '100%', height: 6}}
                className="absolute mb-4 rounded ">
                <div className="absolute w-6 h-6 bottom-4">
                  <AppText>{currentTime}</AppText>
                </div>
                <input
                  type="range"
                  value={trackProgress}
                  step="1"
                  min="0"
                  max={duration ? duration : `${duration}`}
                  onChange={e => onScrub(e.target.value)}
                  onMouseUp={onScrubEnd}
                  onKeyUp={onScrubEnd}
                  style={{backgroundSize: currentPercentage}}
                  className="absolute cursor-pointer z-50 "
                />
                <div className="absolute w-6 h-6 bottom-4 right-0">
                  <AppText>{fullTime}</AppText>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <Icon
                onClick={mute}
                name={isMute ? 'mute' : 'vollume'}
                className="text-indigo-500 w-9 hover:text-indigo-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
