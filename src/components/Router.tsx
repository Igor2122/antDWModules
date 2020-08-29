import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthLayout from "./AuthLayout/AuthLayout";
import PagesList from "../pages/pages/pagesList";
import config from "../config";
import PublicLayout from "./PublicLayout/PublicLayout";

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
              <PagesList />
            </Route>
          </AuthLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
