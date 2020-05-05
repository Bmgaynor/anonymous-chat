# anonymous-chat

Chat application for completely anonymous chatting

## Requirements

* control server cant know who the message is from or to
* the messages are end to end encrypted

## Plan

### Server

Just takes messages and posts them to public storage

### Client

Creates a public and private key
Saves a list of public keys of open chats

Fetches the latest messages and tries to decrypt every one with its private key.  If any can be decrypted then it runs through the list of public keys that it has to see if any of them are messages

### Usage

To create a message parties exchange public keys
