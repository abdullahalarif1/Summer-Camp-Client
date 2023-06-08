import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: isInstructor, refetch, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/students/adminInstructor/${user?.email}`
      );
      return res.data.instructor;
    },
  });
  return [isInstructor, isInstructorLoading, refetch];
};

export default useInstructor;
