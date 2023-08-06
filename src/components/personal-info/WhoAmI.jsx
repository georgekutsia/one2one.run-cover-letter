import React from 'react'

function WhoAmI({ name, title, studies, knowledge }) {
  return (
    <div className="name-title">
      <div className="name">{name}</div>
      <div className="title">{title}</div>
      <div className="studies">{studies}</div>
      <div className="studies">{knowledge}</div>
    </div>
  );
}

export default WhoAmI