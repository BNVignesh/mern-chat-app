import { useEffect } from 'react';
import { useSocketContext } from '../context/SocketContext';
import useConversation from '../conversation/useConversation';

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    const handleMessage = (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    socket?.on("newMessage", handleMessage);
    
    return () => {
      socket?.off("newMessage", handleMessage);
    };
  }, [socket, setMessages]);
};

export default useListenMessages;
