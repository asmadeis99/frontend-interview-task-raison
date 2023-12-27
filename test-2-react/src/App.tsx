import { Route, Switch, Redirect } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import { LoginPage } from './components/LoginPage'

export default function App() {
    return (
        <BrowserRouter>
            <header className="h-20 bg-primary flex items-center p-4">
                <h1 className="text-3xl text-black">Title</h1>
            </header>
            <main className="flex flex-col p-4 h-full">
                <Switch>
                    <Route path="/login" component={LoginPage} />
                    <Redirect from="/" to="/login/step-1" />
                </Switch>
            </main>
        </BrowserRouter>
    )
}
