export const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://breakpoint-server.herokuapp.com"
    : "http://localhost:3000";

export default baseURL;
