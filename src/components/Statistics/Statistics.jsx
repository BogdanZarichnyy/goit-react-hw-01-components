import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getColor } from '../../utils/getColor';

export const Statistics = ({ title, stats }) => {
    // console.log(stats);

    return (
        <section className={css.statistics}>
            {title && (<h2 className={css.title}>{title}</h2>)}

            <ul className={css["stat-list"]}>
                {stats.map(({ id, label, percentage }) => (
                        // зробити колір через повернення рядка 'backgroundColor: ..., color: ...'
                        <li className={css.item} style={getColor()} key={id}>
                            <span className={css.label}>{label}</span>
                            <span className={css.percentage}>{percentage}%</span>
                        </li>
                    )
                )}
            </ul>
        </section>
    );
};

Statistics.protoTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string,
        percentage: PropTypes.number,
    })),
};
