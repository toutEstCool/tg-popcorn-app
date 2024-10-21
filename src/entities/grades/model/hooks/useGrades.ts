import { useGetGradesQuery } from "../queries/queries";

export const useGradesList = () => {
  const {
    data: gradesList,
    isLoading: isLoadingGrades,
    error: isErrorGrades,
  } = useGetGradesQuery();

  const grades = gradesList?.grades || [];

  return {
    grades,
    isLoadingGrades,
    isErrorGrades,
  };
};
