import { motion, AnimatePresence } from "framer-motion";

import FeedbackItem from "./FeedbackItem";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
    const { feedback } = useContext(FeedbackContext);

    if (!feedback || feedback.length === 0) {
        return <p>No feedback yet</p>;
    }

    const markup = feedback.map((feedback) => (
        <motion.div
            key={feedback.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <FeedbackItem key={feedback.id} feedback={feedback} />
        </motion.div>
    ));

    return (
        <div className="feedback-list">
            <AnimatePresence>{markup}</AnimatePresence>
        </div>
    );
}

export default FeedbackList;
