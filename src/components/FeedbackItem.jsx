
import{FaTimes, FaEdit} from 'react-icons/fa'
import { useContext } from 'react';
import Card from './shared/Card';
import FeedBackContext from '../Context/FeedBackContent';
function FeedbackItem({item}) {
   
 const {deleteFeedback, editFeedback} = useContext(FeedBackContext)
  return (
    <Card>
      <div className = 'num-display'>{item.rating}</div>
      <button onClick= { () => deleteFeedback(item.id)} className ='close'>
          <FaTimes color = 'purple' />
      </button>

      <button onClick={() => editFeedback(item)} className ='edit'>
          <FaEdit color = 'purple' />
      </button>
      <div className = 'text-display'>{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;

