import PropTypes from 'prop-types';
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
    <div class="profile">
      <div class="description">
        <img src={avatar} alt={tag} class="avatar" />
        <p class="name">{username}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers </span>
          <span class="quantity">{statsFollowers}</span>
        </li>
        <li>
          <span class="label">Views </span>
          <span class="quantity">{statsViews}</span>
        </li>
        <li>
          <span class="label">Likes </span>
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
