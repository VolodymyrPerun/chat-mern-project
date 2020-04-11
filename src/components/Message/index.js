import React from 'react';
import propTypes from 'prop-types';
import "./Message.scss";
import formatDistanceToNow from "date-fns/formatDistanceToNow/index";
import ru from 'date-fns/locale/ru';
import classNames from 'classnames';
import readedSvg from "assets/img/readed.svg";
import noReadedSvg from "assets/img/noreaded.svg"

const Message = ({avatar, user, text, date, isMe, isReaded, attachments}) => {

    return (
        <div className={classNames('message', {'message--isme': isMe})}>

            <div className="message__content">
                {isMe && isReaded ? (<img className="message__icon-readed"
                                          src={readedSvg} alt="Readed icon"/>) :
                    (<img className="message__icon-readed message__icon-readed--no"
                          src={noReadedSvg} alt="No readed icon"/>)}

                <div className="message__avatar">
                    <img src={avatar}
                         alt="$`{user.fullname}` avatar"/>
                </div>
                <div className="message_info">
                    <div className="message__bubble">
                        <p className="message__text">{text}</p>
                    </div>
                    <div className="message__attachments">
                        {attachments &&
                        attachments.map(item => (
                            <div className="message__attachments-item">
                                <img src={item.url} alt={item.filename}/>
                            </div>
                        ))
                        }
                    </div>
                    <time className="message__date">
                        {formatDistanceToNow(new Date(date), {
                            addSuffix: true,
                            locale: ru
                        })}
                    </time>
                </div>
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
    date: propTypes.string,
    attachments: propTypes.array,
};

export default Message;

