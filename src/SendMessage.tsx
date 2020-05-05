import React from 'react'
import NodeRSA from 'node-rsa';
import { publicKey2 } from './test-keys'
import useLocalStorage from 'hook-local-storage'

function encryptMessage (senderPrivate: any, recipientPublic: any, message: string) {
  console.log('encrypting Message')
  return recipientPublic.encrypt(senderPrivate.encryptPrivate(message, 'base64'), 'base64')
}
function getRSAKeyString () {
  return new NodeRSA({b: 512}).exportKey('private')
}

function useRSAKey (key: string, initialValue: string) {
  const [keyString, setKeyString] = useLocalStorage(key, initialValue)

  React.useMemo(
    () => {
      console.log('generating key')
      return new NodeRSA(keyString)
    },
    [keyString]
  )
  const rsaKey = new NodeRSA(keyString)
  

  return [rsaKey, keyString, setKeyString]
}

function SendMessage () {
  const [privateKey, privateKeyString, setPrivateKeyString] = useRSAKey('private_key_string', getRSAKeyString()) 
  const [recipientKey, recipientKeyString, setRecipientKeyString] = useRSAKey('recipient_public_key_string', publicKey2.exportKey('public'))
  const [message, setMessage] = React.useState('')
  const encryptedMessage = React.useMemo(
    () => encryptMessage(privateKey, recipientKey, message),
    [message, privateKey, recipientKey])


  return (
    <div>
      <div>
        <label>RSA private key</label>
        <textarea rows={5} cols={100} onChange={(e) => setPrivateKeyString(e.target.value)} value={privateKeyString}></textarea>
      </div>
      
      <div>
        <label>recipient:</label>
        <textarea rows={5} cols={100} onChange={(e) => setRecipientKeyString(e.target.value)} value={recipientKeyString}></textarea>
      </div>

      <div>
        <label>message:</label>
        <textarea rows={5} cols={100} onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
      </div>
      <div>
        <label>Encrypted Message</label>
        <textarea rows={5} cols={100} disabled value={encryptedMessage}></textarea>
      </div>
      
      
    </div>
  )
}

export default SendMessage
