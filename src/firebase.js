import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDz6sDLO3e-3OHxHPpqy-DtMAtaxynK9-Y',
  authDomain: 'chat-3df91.firebaseapp.com',
  projectId: 'chat-3df91',
  storageBucket: 'chat-3df91.appspot.com',
  messagingSenderId: '509050949236',
  appId: '1:509050949236:web:caacb65e3b5a94c2e18b21',
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const storage = getStorage()
