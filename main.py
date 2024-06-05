from fastapi import FastAPI, WebSocket
import sys


import test  

app = FastAPI()

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        # Use the imported function to generate a response
        db = test.load_chroma_collection("contents", "fst8")  
        response = test.generate_answer(db, query=data)
        await websocket.send_text(f"Bot: {response}")  # Send the generated response back to the client
