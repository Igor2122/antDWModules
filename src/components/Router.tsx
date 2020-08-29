import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthLayout from "./AuthLayout/AuthLayout";
import config from "../config";
import PublicLayout from "./PublicLayout/PublicLayout";
import BlogsList from "../pages/blogs/blogsList";

export default function () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={config.routes.public.path}>
          <PublicLayout>stuff</PublicLayout>
        </Route>
        <Route path={config.routes.app.path}>
          <AuthLayout>
            <Route path={config.routes.pagesList.path}>
              <BlogsList />
            </Route>
          </AuthLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
