import { useQuery } from "@tanstack/react-query";
import { getRegisterFrame } from "../api/registerFrame";

export function useGetRegisterFrame() {
  return useQuery({
    queryKey: ["registerFrame"],
    queryFn: () => getRegisterFrame(),
  });
}
