import { Link } from "react-router-dom";

import { buttonVariants } from "@/components/ui/button";

const NotFound = () => {
  return (
    <>
      <h1>Not found</h1>
      <Link to="/" className={buttonVariants({ variant: "outline" })}>
        Go home
      </Link>
    </>
  );
};

export default NotFound;
