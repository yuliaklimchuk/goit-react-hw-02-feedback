import style from './feedbackOptions.module.css';
import PropTypes from "prop-types";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => { 
    // const { options, onLeaveFeedback } = this.props;
    const keys = Object.keys(options);
    return <div>
        {/* <button type='button' className={style.button} onClick={onLeaveFeedback}>Good</button>
        <button type='button' className={style.button} onClick={onLeaveFeedback}>Neutral</button>
        <button type='button' className={style.button} onClick={onLeaveFeedback}>Bad</button> */}
        {keys.map((item) => (
            <button
                key={item}
                type="button"
                className={style.button}
                name={item}
                onClick={onLeaveFeedback}
            >
            {item}
            </button>
        ))}
    </div>
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
};