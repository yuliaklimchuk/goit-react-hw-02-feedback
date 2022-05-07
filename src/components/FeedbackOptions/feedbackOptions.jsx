import style from './feedbackOptions.module.css';
import PropTypes from "prop-types";

export const FeedbackOptions = ({ onLeaveFeedback }) => { 
    return <div>
        <button type='button' className={style.button} onClick={onLeaveFeedback}>Good</button>
        <button type='button' className={style.button} onClick={onLeaveFeedback}>Neutral</button>
        <button type='button' className={style.button} onClick={onLeaveFeedback}>Bad</button>
    </div>
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func,
};