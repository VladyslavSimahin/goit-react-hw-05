import clsx from "clsx";
import css from "./FriendListItem.module.css";

export const FriendListItem = ({ name, avatar, isOnline }) => {
  const color = clsx(css.div, isOnline ? css.isTrue : css.isFalse);

  return (
    <div className={color}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>
        {isOnline ? "Online" : "Offline"}
        {isOnline}
      </p>
    </div>
  );
};
