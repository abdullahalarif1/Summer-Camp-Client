import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useInstructorCart = () => {
    const { isLoading, refetch, data: instructors = [] } = useQuery({
        queryKey: ['instructorData'],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/instructor`)
            return res.data
        }
    })
    return [instructors, refetch, isLoading]
}

export default useInstructorCart