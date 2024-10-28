import React from "react";
import { motion } from "framer-motion";

const EventModal = ({ event, closeModal }) => (
    <motion.div
        className="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={closeModal}
    >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{event.name}</h2>
            <p>{event.description}</p>
            <img src={event.image} alt={event.name} />
            <button onClick={closeModal}>Close</button>
        </div>
    </motion.div>
);

export default EventModal;
