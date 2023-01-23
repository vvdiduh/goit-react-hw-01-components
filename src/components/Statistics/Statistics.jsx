import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({ title, items }) {
  return (
    <section className={css.statistics}>
      {title ? <h2 class="title">{title}</h2> : ''}
      <ul className={css.statList}>
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
