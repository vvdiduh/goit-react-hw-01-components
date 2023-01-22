import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline, statusIcon }) {
  console.log(css[isOnline]);
  return (
    <>
      <span className={`${css.status} ${css[isOnline]}`}>{statusIcon}</span>
      <img className={css.avatar} src={avatar} alt={name} height="40" />
      <p className={css.name}>{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  statusIcon: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
