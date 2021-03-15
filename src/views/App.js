import React from 'react';
import { Switch } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from 'firebase/app';
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import store from 'store';
import routes from 'routes';
import MainTemplate from 'templates/MainTemplate';
import Home from 'views/Home';
import SignIn from 'views/SignIn';
import SignUp from 'views/SignUp';

const rrfProps = {
  firebase,
  config: {
    userProfile: false,
    useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB},
  },
  dispatch: store.dispatch,
  createFirestoreInstance,
};

const AuthIsLoaded = ({ children }) => {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <div>splash screen...</div>;
  return children;
};

const App = () => (
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <BrowserRouter>
          <MainTemplate>
            <Switch>
              <Route exact path={routes.home} component={Home} />
              <Route exact path={routes.login} component={SignIn} />
              <Route exact path={routes.register} component={SignUp} />
            </Switch>
          </MainTemplate>
        </BrowserRouter>
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>
);

export default App;
