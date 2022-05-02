import React from 'react';
import dayjs from 'dayjs';
import { IMG_URL } from '../../consts';


function Avatar(props) {
  return (
    <img className="Avatar"
      src={IMG_URL}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      {/* <div className="UserInfo">
        <img className="Avatar"
          src={IMG_URL}
          alt={props?.author?.name}
        />
        <div className="UserInfo-name">
          {props?.author?.name}
        </div>
      </div> */}
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {dayjs(props?.date).format('YYYY-MM-DD HH:MM:ss')}
      </div>
    </div>
  );
}

export default Comment;
