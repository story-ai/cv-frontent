import dev from "./configureStore.dev";
import prod from "./configureStore.prod";

export default (process.env.NODE_ENV === "production" &&
process.env.STAGING !== "true"
  ? prod
  : dev);
