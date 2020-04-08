import React from 'react';
import propTypes from 'prop-types';
import "./Message.scss";
import formatDistanceToNow from "date-fns/formatDistanceToNow/index";
import ru from 'date-fns/locale/ru'

const Message = ({avatar, user, text, date}) => {

    return (
        <div className="message">
            <div className="message__avatar">
                <img src={avatar}
                     alt="$`{user.fullname}` avatar"/>
            </div>
            <div className="message__content">
                <div className="message__bubble">
                    <p className="message__text">{text}</p>
                </div>
                <time className="message__date">
                    {formatDistanceToNow(new Date(date), {addSuffix: true,
                        locale: ru
                    })}
                </time>
            </div>
        </div>
    );
};

Message.defaultProps = {
    user: {}
};

Message.propTypes = {
    avatar: propTypes.string,
    text: propTypes.string,
    user: propTypes.object,
    date: propTypes.string
};

export default Message;

