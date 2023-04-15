import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul className={css.statistics__list}>
        <li className={css.statistics__item}>
          Good: <span>{good}</span>
        </li>
        <li className={css.statistics__item}>
          Neutral: <span>{neutral}</span>
        </li>
        <li className={css.statistics__item}>
          Bad: <span>{bad}</span>
        </li>
        <li className={css.statistics__item}>
          Total: <span>{total}</span>
        </li>
        <li className={css.statistics__item}>
          PositiveFeedback:{' '}
          <span>
            {positivePercentage ? Math.round(positivePercentage) : '0'}%
          </span>
        </li>
      </ul>
    </>
  );
};
export default Statistics;
