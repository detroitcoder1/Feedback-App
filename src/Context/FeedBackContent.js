import { createContext, useState } from "react"
import { v4 as uuidv4 } from "uuid";

const FeedBackContext = createContext()
export const FeedbackProvider = ({children})  => {
const [feedback, setFeedback] = useState(
   [ { 
        id:1,
        text: 'This is FeedBack from item 1',
        rating: 10
    },
    { 
        id:2,
        text: 'This is FeedBack from item 2',
        rating: 5
    },
    { 
        id:3,
        text: 'This is FeedBack from item 3',
        rating: 7
    }
]
    )

    const [feedbackEdit, setfeedbackEdit] = useState({
        item: {},
        edit: false}
        );

      

  const editFeedback = (item) => {
      setfeedbackEdit ({
         item: item,
         edit: true, 
      })
  }
  
  // Add Feedback
      const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
      };

        // delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm("are you sure you want to delete")) {
          setFeedback(feedback.filter((item) => item.id !== id));
        }
      };

      //update feedback item

      const updateFeedback = (id,updItem) => {

        console.log({id})
        console.log({updItem})
      }

    

    return <FeedBackContext.Provider value= {{feedback, 
    deleteFeedback, 
    addFeedback,
    updateFeedback,
    feedbackEdit,
    editFeedback,
    
   
    }}>
        {children}
    </FeedBackContext.Provider>
}


export default FeedBackContext