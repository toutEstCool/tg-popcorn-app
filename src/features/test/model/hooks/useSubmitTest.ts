import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from "@tanstack/react-query";
import {
  postApiTestsSubmitTest,
  SubmitTestCommand,
  SubmitTestResponse,
} from "../../../../shared/api/generated";

export function useSubmitTestMutation(
  options?: UseMutationOptions<SubmitTestResponse, Error, SubmitTestCommand>,
) {
  const queryClient = useQueryClient();

  return useMutation<SubmitTestResponse, Error, SubmitTestCommand>({
    mutationFn: (data) => postApiTestsSubmitTest(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["test"],
      });
    },
    ...options,
  });
}
