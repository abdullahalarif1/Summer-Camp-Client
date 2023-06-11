import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const usePayment = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    data: payment = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payments");
      return res.data;
    },
  });
  return [payment, isLoading, refetch];
};

export default usePayment;
