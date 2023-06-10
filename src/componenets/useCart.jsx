import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useCart = () => {
  const { user } = useAuth();

  const {
    data: cart = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/carts?email=${user.email}`
      );
      return res.data;
    },
  });
  return [cart, isLoading, refetch];
};

export default useCart;
