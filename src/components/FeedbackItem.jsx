import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import PropTypes from "prop-types";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ feedback }) {
    const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
    return (
        <Card>
            <div className="num-display">{feedback.rating}</div>
            <button className="close">
                <FaTimes
                    color="purple"
                    onClick={() => deleteFeedback(feedback.id)}
                />
            </button>
            <button className="edit" onClick={() => editFeedback(feedback)}>
                <FaEdit color="purple" />
            </button>
            <div className="text-display">{feedback.text}</div>
        </Card>
    );
}

FeedbackItem.propTypes = {
    feedback: PropTypes.object.isRequired,
};
export default FeedbackItem;
