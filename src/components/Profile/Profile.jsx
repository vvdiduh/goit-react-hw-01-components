import PropTypes from 'prop-types';
import css from './Profile.module.css'
export default function Profile({
  username,
  tag,
  location,
  avatar,
  statsFollowers,
  statsViews,
  statsLikes,
}) {
  return (
    <div className={css.profile}>
      <div class="description">
        <img src={avatar} alt={tag} class="avatar" />
        <p class="name">{username}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span class="label">&#9739; Followers </span>
          <span class="quantity">{statsFollowers}</span>
        </li>
        <li>
          <span class="label">&#9865; Views </span>
          <span class="quantity">{statsViews}</span>
        </li>
        <li>
          <span class="label">&#10084; Likes </span>
          <span class="quantity">{statsLikes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  statsFollowers: PropTypes.number.isRequired,
  statsViews: PropTypes.number.isRequired,
  statsLikes: PropTypes.number.isRequired,
};
