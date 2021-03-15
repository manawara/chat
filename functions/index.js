const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.randomNumber = functions.https.onRequest((request, response) => {
  const number = Math.round(Math.random() * 100);
  response.send(number.toString());
});

exports.addText = functions.https.onCall((data, context) => {
  console.log(context);
  return admin
    .firestore()
    .collection('messages')
    .add(data)
    .then((doc) => console.log('edit ', doc));
});

exports.addAdminRole = functions.https.onCall((data, context) => {
  return admin
    .auth()
    .getUserByEmail(data.email)
    .then((user) => {
      return admin
        .auth()
        .setCustomUserClaims(user.uid, {
          admin: true,
        })
        .then(() => {
          return {
            message: `Success ${data.email} has been add admin!`,
          };
        })
        .catch(() => {
          return {
            message: `Error! ${data.email} `,
          };
        });
    })
    .catch(() => {
      return {
        message: `${data.email} not found!`,
      };
    });
});
