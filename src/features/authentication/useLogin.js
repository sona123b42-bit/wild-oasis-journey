import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isPending: isLogin } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      const user = data.user ?? data.session?.user;
      queryClient.setQueryData(["user"], user);
      navigate("/dashboard", { replace: true });
      toast.success("Login successfully");
    },
    onError: (err) => {
      if (err.message.includes("Invalid login credentials")) {
        toast.error("Wrong email or password, try again.");
      } else {
        toast.error("Something went wrong. Please try later.");
      }
    },
  });
  return { login, isLogin };
}
