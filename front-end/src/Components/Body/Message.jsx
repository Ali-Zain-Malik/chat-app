const Message = (props) => {
    return (
        <li className='message-body'>
            <div className="message rounded-end rounded-top">
                <span className="message-text">{props.message}</span>
            </div>
        </li>
    )
}

export default Message
