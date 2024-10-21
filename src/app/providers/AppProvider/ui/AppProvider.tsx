import { ReactNode } from "react";
import { Provider } from "react-redux";
import { mainStore } from "../../store";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../../../../shared/api/queryClient";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type Props = {
  children: ReactNode;
};

export const MainProviders = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={mainStore}>{children}</Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
