import { Button } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import { auth, db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { ContactsOutlined } from "@material-ui/icons";

function ChatInput({ channelName, channelId, chatRef }) {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    if (input) {
      console.log("photo:", user?.photoURL);
      console.log("name: ", user?.displayName);

      const messagesCol = collection(db, "rooms", channelId, "messages");
      addDoc(messagesCol, {
        message: input,
        timestamp: serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });

      chatRef.current.scrollIntoView({
        behavior: "smooth",
      });
      setInput("");
    }
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          placeholder={`Message #${channelName}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 10px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;
