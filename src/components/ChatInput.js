import { Button } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    const messagesCol = collection(db, "rooms", channelId, "messages");
    addDoc(messagesCol, {
      message: input,
      timestamp: serverTimestamp(),
      user: "Kiran Suvarna",
      userImage:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgithub.com%2FKiranSuvarna&psig=AOvVaw3GHs2oUkMogEpebPIIWnUo&ust=1664289904284000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMjTlp7ZsvoCFQAAAAAdAAAAABAD",
    });
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          placeholder={`Message #ROOM`}
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
