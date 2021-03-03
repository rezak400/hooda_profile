import React from 'react'
import {
    Home,
    About
} from '../Pages'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {
    Navbar,
    Footer
} from '../Components'

const Routes = () => {
    return (
        <BrowserRouter>
            {/* //! JANGAN LUPA "exact" AWKOAWKWOA  */}
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route path="*" component={() => "error 404 not found"} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default Routes
