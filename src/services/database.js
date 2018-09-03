import store from '@/store';
import config from '@/config';
const firebase = require('firebase');

const database = firebase.initializeApp(config);
console.log(database);

database.signUp = async(email, password) => {

  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);

    console.log('Created');

    store.commit('setCurrentUser', firebase.auth().currentUser);

    return true
  } catch (error) {
    return error
  }
}

database.signIn = async(email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    console.log('Created');
    store.commit('setCurrentUser', firebase.auth().currentUser);

    return true
  } catch (error) {
    return error
  }
}

database.signOut = async() => {
  try {
    await firebase.auth().signOut();
    console.log('Signed out ');
    store.commit('setCurrentUser', null);

    return true
  } catch (error) {
    return error
  }
}

export default database;