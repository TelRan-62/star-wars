const Friend = ({friend, pos}) => {
    let styles = "w-full ";
    if (pos === 7) {
        styles += 'rounded-bl-3xl';
    }
    if (pos === 9) {
        styles += 'rounded-br-3xl';
    }
    return (
        <img className={styles} src={friend} alt="Friend"/>
    )
}

export default Friend;