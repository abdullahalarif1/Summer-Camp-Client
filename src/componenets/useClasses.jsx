import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useClasses = () => {
  const {
    isLoading,
    refetch,
    data: classes = [],
  } = useQuery({
    queryKey: ["classesData"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/instructors`
      );
      return res.data;
    },
  });
  return [classes, refetch, isLoading];
};

export default useClasses;
