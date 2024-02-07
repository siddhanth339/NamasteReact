import { useRouteError } from "react-router-dom";
export const Error = () => {
  const err = useRouteError();
  return (
    <>
      <h1>Oops!!</h1>
      <h2>
        {err?.status} : {err?.error?.message}
      </h2>
    </>
  );
};
