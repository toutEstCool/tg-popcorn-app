import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from "@tanstack/react-query";
import {
  GenerateAndGetReferralCodeCommand,
  GenerateAndGetReferralCodeResponse,
  postApiUsersGenerateAndGetReferralCode,
} from "../../../shared/api/generated";

export function useGenerateReferralCodeMutation(
  options?: UseMutationOptions<
    GenerateAndGetReferralCodeResponse,
    Error,
    GenerateAndGetReferralCodeCommand
  >,
) {
  const queryClient = useQueryClient();

  return useMutation<
    GenerateAndGetReferralCodeResponse,
    Error,
    GenerateAndGetReferralCodeCommand
  >({
    mutationFn: (data) => postApiUsersGenerateAndGetReferralCode(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["generate-reff"],
      });
    },
    ...options,
  });
}
