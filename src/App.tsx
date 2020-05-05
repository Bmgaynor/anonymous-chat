import React from 'react';
import logo from './logo.svg';
import './App.css';
import SendMessage from './SendMessage'

import { privateKey1, privateKey2, publicKey2 } from './test-keys'

// const encryptedMessage = key2.encrypt('hello', 'base64')
// console.log(encryptedMessage)
// console.log(key2.decrypt(encryptedMessage, 'utf8'))


// 1 side
const messageToTwo = privateKey2.encrypt(privateKey1.encryptPrivate('hello', 'base64'), 'base64')

// 2 side
console.log(messageToTwo)

// 
const message = privateKey1.decryptPublic(privateKey2.decrypt(messageToTwo, 'utf8'), 'utf8')
console.log(message)

function App() {
  
  return (
    <div className="App">
      <SendMessage />
    </div>
  );
}

export default App;
