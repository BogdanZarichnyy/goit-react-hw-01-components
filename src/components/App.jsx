import { Profile } from 'components/Profile/Profile';
import user from '../json/user.json';

import { Statistics } from 'components/Statistics/Statistics';
import data from '../json/data.json';

import { FriendsList } from 'components/Friends/FriendList';
import friends from '../json/friends.json';

import { TransactionHistory } from 'components/TransitionsHistory/TransactionHistory';
import transactions from '../json/transactions.json';

export const App = () => {
    return (
        <div className="data">
            <Profile
                username = {user.username} 
                tag = {user.tag} 
                location = {user.location} 
                avatar = {user.avatar} 
                stats = {user.stats}
            />
            <Statistics
                title = "Upload stats" 
                stats = {data}
            />
            <FriendsList
                data = {friends}
            />
            <TransactionHistory
                items = {transactions}
            />
        </div>
    );
};
