import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import "./Message.scss";

const Message = ({avatar, user, text, date}) => {
    return (
        <div className="message">
            <div className="message__avatar">
                <img src={avatar}
                     alt="$`{user.fullname}` avatar"/>
            </div>
        </div>
    );
};

Message.defaultProps = {
    user:{}
};

Message.propTypes = {
    avatar: propTypes.string,
    text: propTypes.string,
    user: propTypes.object,
    date: propTypes.string
};

export default Message;

