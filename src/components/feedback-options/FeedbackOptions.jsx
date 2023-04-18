import css from '../feedback-options/FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div className={css.feedback__options}>
        {options.map(option => (
          <button
            className={css.feedback__button}
            onClick={onLeaveFeedback}
            key={option}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
