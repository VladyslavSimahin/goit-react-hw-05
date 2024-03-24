import { FriendListItem } from "./FriendListItem/FriendListItem";

export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
      {/* Кількість li залежить від кількості об'єктів в масиві */}
    </ul>
  );
};
