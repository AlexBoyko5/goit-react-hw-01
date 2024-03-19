import FriendListItem from '../FriendListIem/FriendListItem';
import styles from '../FriendList/FriendList.module.css';
const FriendList = ({ friends }) => {
	return (
		<ul className={styles.friendlist}>
			{friends.map((friend) => {
				return (
					<li key={friend.id}>
						<FriendListItem
							avatar={friend.avatar}
							name={friend.name}
							isOnline={friend.isOnline}
						/>
					</li>
				);
			})}
		</ul>
	);
};
export default FriendList;
