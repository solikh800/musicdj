/* eslint-disable import/no-anonymous-default-export */
export default function (sec) {
  let minutes = Math.floor(sec / 60);
  let seconds = (sec % 60).toFixed(0);

  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
