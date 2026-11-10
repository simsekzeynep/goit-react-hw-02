import css from "./Options.module.css";

const Options = ({ onFeedback, onReset, totalFeedback }) => {
  return (
    <div className={css.options}>
      <button className={css.button} onClick={() => onFeedback("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => onFeedback("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.button} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
