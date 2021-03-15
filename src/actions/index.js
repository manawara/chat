export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((data) => {
        firebase.auth().currentUser.updateProfile({
          displayName: `${newUser.firstName} ${newUser.lastName}`,
        });
        const id = firebase.auth().currentUser.uid;
        firestore
          .collection('users')
          .doc(id)
          .set({ ...newUser, createdAt: firestore.FieldValue.serverTimestamp() });
        dispatch({ type: 'SIGNUP_SUCCESS' });
      })
      .catch(function (error) {
        var errorMessage = error.message;
        console.log(errorMessage);
        dispatch({ type: 'SIGNUP_ERROR', errorMessage });
      });
  };
};

export const signIn = (email, password) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    console.log('dziala');
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            console.log(user);
            user.getIdTokenResult().then((getIdTokenResult) => {
              user.admin = getIdTokenResult.claims.admin;
              const admin = user.admin ? true : false;
              firestore.collection('users').doc(user.uid).update({ admin: admin });
            });
          }
        });
        dispatch({ type: 'LOGIN_SUCCESS' });
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorMessage = error.message;
        dispatch({ type: 'LOGIN_ERROR', errorMessage });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
        dispatch({ type: 'SIGNOUT_SUCCESS' });
      })
      .catch(function (error) {
        // An error happened.
      });
  };
};

export const addMessage = (text) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection('messages')
      .add({ ...text, createdAt: firestore.FieldValue.serverTimestamp() })
      .then(() => {
        dispatch({ type: 'MESSAGE_SUCCESS' });
      })
      .catch((err) => {
        var errorMessage = err.message;

        dispatch({ type: 'MESSAGE_ERROR', errorMessage });
      });
  };
};

export const addAdmin = (email) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    const addAdminRole = firebase.functions().httpsCallable('addAdminRole');
    addAdminRole({ email: email })
      .then((result) => {
        const successMessage = result.data.message;
        console.log(successMessage);
        dispatch({ type: 'ADMIN_ADD_SUCCESS', successMessage });
      })
      .catch((err) => {
        const errorMessage = err.message;
        console.log(errorMessage);
        dispatch({ type: 'ADMIN_ADD_ERROR', errorMessage });
      });
  };
};

export const deleteMessage = (id) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('messages')
      .doc(id)
      .delete()
      .then((result) => {
        console.log('dziala');
        dispatch({ type: 'MESSAGE_DELETE_SUCCESS', result });
      })
      .catch((err) => {
        dispatch({ type: 'MESSAGE_DELETE_ERROR', err });
      });
  };
};

// const addText = firebase.functions().httpsCallable('addText');
// addText({ ...text, createdAt: new Date().toDateString() }).then(
//   (result) => console.log(result.data),
//   console.log(firestore.FieldValue.serverTimestamp()),
// );
