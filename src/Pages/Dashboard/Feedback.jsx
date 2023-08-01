import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Feedback = ({ uniqueId }) => {
  const { id } = useParams();
  console.log(id);
  const [feedbackText, setFeedbackText] = useState("");

  const handleFeedback = async (e) => {
    e.preventDefault();

    // Send feedback to the backend
    await axios.patch(
      `https://summer-camp-server-gamma-bay.vercel.app/instructors/feedback/${id}`,
      {
        feedback: feedbackText,
      }
    );

    // Clear the feedback text
    setFeedbackText("");

    //show toast
    Swal.fire({
      title: "feedback send successfully",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };
  return (
    <div className="md:pt-20">
      <h1 className="text-white text-center text-3xl  font-thin">
        Write <span className="text-red-500">Feedback</span>
      </h1>{" "}
      <div className="px-16 mt-11">
        <form onSubmit={handleFeedback}>
          <textarea
            className="textarea textarea-error bg-transparent"
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
    </div>
  );
};

export default Feedback;
