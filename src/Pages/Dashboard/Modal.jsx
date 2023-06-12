import axios from "axios";
import { useState } from "react";

const Modal = ({ uniqueId }) => {
  console.log(uniqueId);

  const [feedbackText, setFeedbackText] = useState("");

  const handleFeedback = async (e) => {
    e.preventDefault();

    // Send feedback to the backend
    await axios.patch(
      `https://summer-camp-server-gamma-bay.vercel.app/instructors/feedback/${uniqueId}`,
      {
        feedback: feedbackText,
      }
    );

    // Clear the feedback text
    setFeedbackText("");
  };
  return (
    <div>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box ">
          <div className="px-16 mt-11">
            <form onSubmit={handleFeedback}>
              <textarea
                className="textarea textarea-error "
                placeholder="Write your feedback here"
                style={{ width: "100%", minHeight: "100px" }}
                name="feedback"
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
              ></textarea>{" "}
              <br />
              <input
                className="text-center  btn btn-error mt-3 btn-outline w-full"
                type="submit"
                value="Send"
              />
            </form>
          </div>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn">
              Close!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
