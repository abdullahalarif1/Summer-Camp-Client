import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Photogenic | ${title}`;
  }, [title]);
};

export default useTitle;
