import style from './statistics.module.css';
import PropTypes from "prop-types";

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>
{
    return <div>
        <h2 className={style.title}>Statistics</h2>
        <ul className={style.list}>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>Positive feedback: {positivePercentage}%</li>
            </ul>
    </div>
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
};