import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div id="error-page" style={{position:"relative", color:"white", display: "flex", flexDirection:"column", alignItems: "center", justifyContent:"center", paddingTop: "20%"}}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}