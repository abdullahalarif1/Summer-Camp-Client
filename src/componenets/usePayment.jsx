import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const usePayment = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const {
    data: payment = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `http://localhost:5000/payments/${user?.email}`
      );
      return res.data;
    },
  });
  return [payment, isLoading, refetch];
};

export default usePayment;
