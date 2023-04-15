import css from '../feedback-options/FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <div className={css.feedback__options}>
        <button className={css.feedback__button} onClick={onLeaveFeedback}>
          Good
        </button>
        <button className={css.feedback__button} onClick={onLeaveFeedback}>
          Neutral
        </button>
        <button className={css.feedback__button} onClick={onLeaveFeedback}>
          Bad
        </button>
      </div>
    </>
  );
};
export default FeedbackOptions;
