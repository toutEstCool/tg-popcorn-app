import { useGetTestsListQuery } from "../../../../entities/test/queries";
import { GetTestsListQuery } from "../../../../shared/api/generated";

export const useTestList = ({ skip = 0, take = 11 }: GetTestsListQuery) => {
  const {
    data: testsList,
    isLoading: isLoadingTestsList,
    isError: isErrorTestsList,
  } = useGetTestsListQuery({ skip, take });

  const tests = testsList?.items || [];

  return {
    tests,
    isLoadingTestsList,
    isErrorTestsList,
  };
};
