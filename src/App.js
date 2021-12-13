import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout'
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import ForgetPassword from './components/pages/ForgetPassword';
import Rectangle from "./components/rectangles/Rectangle";




function App() {
  return (




    <Router>
      <Layout>
        <div className="main">
          <Rectangle />
        </div>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/forget-password">
            <ForgetPassword />
          </Route>
        </Switch>
      </Layout>
    </Router>

  );
}
export default App;