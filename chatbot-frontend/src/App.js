import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  TextField,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket("ws://localhost:8000/ws");

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0d47a1",
      light: "#5472d3", // A light blue for user messages
    },
    secondary: {
      main: "#ff1744",
      light: "#90caf9", // Changed to a lighter blue for bot messages
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "1.5rem",
    },
    body1: {
      fontSize: "1rem",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)", // Soft shadow for elevation
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // More natural button text
          fontWeight: "bold",
        },
      },
    },
  },
});

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    client.onmessage = (message) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message.data, sender: "bot" },
      ]);
    };
  }, []);

  const handleSendMessage = () => {
    if (input.trim()) {
      client.send(input);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, sender: "user" },
      ]);
      setInput("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper
        elevation={3}
        sx={{ height: "95vh", display: "flex", flexDirection: "column" }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{ p: 2, backgroundColor: "primary.main", color: "white" }}
        >
          Chat Interface
        </Typography>
        <List
          sx={{ flexGrow: 1, overflow: "auto", bgcolor: "background.paper" }}
        >
          {messages.map((message, index) => (
            <ListItem
              key={index}
              sx={{
                justifyContent:
                  message.sender === "user" ? "flex-end" : "flex-start",
              }}
            >
              <Box
                sx={{
                  maxWidth: "80%",
                  bgcolor:
                    message.sender === "user"
                      ? "primary.light"
                      : "secondary.light",
                  color: "white",
                  borderRadius: 8,
                  p: 2,
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                }}
              >
                <ListItemText primary={message.text} />
              </Box>
            </ListItem>
          ))}
        </List>
        <Box sx={{ p: 2, borderTop: "1px solid grey" }}>
          <TextField
            fullWidth
            variant="outlined"
            label="Type your message here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            InputProps={{
              endAdornment: (
                <IconButton color="primary" onClick={handleSendMessage}>
                  <SendIcon />
                </IconButton>
              ),
            }}
          />
        </Box>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
