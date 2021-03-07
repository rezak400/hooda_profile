import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, About, Version } from "../Pages";
import { Navbar, Footer } from "../Components";

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/maskur/version" component={Version} />
        <Route exact path="/customer/version" component={Version} />
        <Route exact path="/merchant/version" component={Version} />
        <Route exact path="/helpdesk" component={() => <div style={{ minHeight: "500px", padding: 100 }}>helpdesk</div>} />
        <Route exact path="/terms" component={() => <div style={{ minHeight: "500px", padding: 100 }}>terms</div>} />
        <Route exact path="/faq" component={() => <div style={{ minHeight: "500px", padding: 100 }}>faq</div>} />
        <Route exact path="/partnershipagreement" component={() => <div style={{ minHeight: "500px", padding: 100 }}>partnership</div>} />
        <Route path="*" component={() => "error 404 not found"} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
