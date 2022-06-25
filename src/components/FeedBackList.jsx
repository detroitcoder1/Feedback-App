import React from "react";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import FeedBackContext from "../Context/FeedBackContent";

function FeedBackList() {
  
const {feedback} = useContext(FeedBackContext);


  if (!feedback || feedback.length === 0) {
    return <p>No FeedBack Yet</p>;
  }

  return (
    <div className="feedbacklist">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedBackList;
