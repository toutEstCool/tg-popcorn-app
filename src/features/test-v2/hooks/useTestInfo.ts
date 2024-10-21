import { useParams } from "react-router-dom";
import { useGetTestInfoQuery } from "../../../entities/test-v2/queries";

interface UseTestInfoProps {
  id?: number;
}

export const useTestInfo = ({ id }: UseTestInfoProps) => {
  const { testId } = useParams<{ testId: string }>();

  const effectiveTestId = id ?? Number(testId);

  const {
    data: testInfo,
    isLoading: isLoadingTestInfo,
    isError: isErrorTestInfo,
  } = useGetTestInfoQuery({ testId: effectiveTestId });

  return {
    testInfo,
    isLoadingTestInfo,
    isErrorTestInfo,
  };
};
