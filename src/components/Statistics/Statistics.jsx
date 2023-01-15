import PropTypes from 'prop-types';

export default function Statistics({ title, items }) {
  return (
    <section class="statistics">
      <h2 class="title">{title ? title : ''}</h2>
      <ul class="stat-list">
        {items.map(item => (
          <li class="item" key={item.id}>
            <span class="label">{item.label} </span>
            <span class="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};
