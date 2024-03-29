import { useState, useEffect} from "react";
import { useContext } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedBackContext from "../Context/FeedBackContent";

function FeedBackForm() {
  const [text, setText] = useState("");

  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);

  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedBackContext)

  useEffect(() => {
   
    if (feedbackEdit.edit === true) {
        setBtnDisabled(false)
        
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
     
    }

}, [feedbackEdit])

  
  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      text,
      rating,
    };
        if (feedbackEdit === true) {
            updateFeedback(feedbackEdit.item.id, newFeedback)
        } else {
            addFeedback(newFeedback);
        }
    
    setText("");
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2> How would you rate your service with us? </h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a Review"
            value={text}
          />
          <Button type="submit">Send</Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedBackForm;
