import React from "react";
import { Route } from "react-router";

const LayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <main className="w-full flex justify-center items-center p-6">
          <Component {...props} {...rest} />
        </main>
      )}
    />
  );
};

export default LayoutRoute;
