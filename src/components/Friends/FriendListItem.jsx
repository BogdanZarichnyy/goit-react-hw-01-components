import PropTypes from 'prop-types';
import css from './FriendsListItem.module.css';

export const FriendsListItem = ({ avatar, name, isOnline }) => {
    return (
        <>
            <span className={isOnline ? css.online : css.offline}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48px" />
            <p className={css.name}>{name}</p>
        </>
    );
};

FriendsListItem.protoTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};