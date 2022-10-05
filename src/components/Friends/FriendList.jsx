import PropTypes from 'prop-types';
import { FriendsListItem } from './FriendListItem';
import css from './FriendsList.module.css';

export const FriendsList = ({ data }) => {
    // console.log(data);

    return (
        <ul className={css["friend-list"]}>
            {data.map( ({ id, avatar, name, isOnline }) => (
                <li className={css.item} key={id}>
                    <FriendsListItem
                        avatar = {avatar} 
                        name = {name} 
                        isOnline = {isOnline}
                    />
                </li>
            ))}
        </ul>
    );
};

FriendsList.protoTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })),
};