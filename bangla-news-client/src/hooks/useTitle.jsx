import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = title + " - Bangla News";
  }, [title]);
};

export default useTitle;
