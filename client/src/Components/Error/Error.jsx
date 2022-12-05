import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "../UI/Container/Container";

function Error() {
  const userAccess = useSelector((state) => state.loginState.userAccess);

  return (
    <div>
      <Container>
        <div className="w-full flex justify-center items-center mt-12">
          <h1 className="text-red-500 text-2xl mr-4">
            Error! Page does not exist...
          </h1>
          <Link
            className="btn-sm"
            to={userAccess ? "/pick-share-homeDarius" : "/"}
          >
            Go back
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Error;
