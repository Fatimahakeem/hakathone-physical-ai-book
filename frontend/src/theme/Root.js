import React from 'react';
import { UserProvider } from '../contexts/UserContext';
import ChatWidget from '../components/ChatWidget';

// Default implementation, that you can customize
export default function Root({children}) {
  return (
    <UserProvider>
      {children}
      
      <ChatWidget />
    </UserProvider>
  );
}
