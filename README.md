<<<<<<< HEAD
# FSTT Chatbot Project Using RAG and Gemini API

## Project Description

The FSTT Chatbot is an advanced tool designed to facilitate real-time academic interactions by providing information related to courses, activities, and administrative queries at the Faculté des Sciences et Techniques de Tanger (FSTT). Utilizing cutting-edge Natural Language Processing (NLP) technologies, the chatbot ensures that both students and faculty have immediate access to the most relevant and up-to-date information.

## About RAG with Gemini

Retrieval Augmented Generation (RAG) is a powerful framework that combines the best of retrieval and generative NLP models. In this project, we integrate RAG with the Gemini API, enhancing the chatbot's ability to provide precise answers by pulling relevant information from a pre-indexed database before generating responses. This combination allows the chatbot to overcome traditional limitations of language models, such as producing outdated or contextually incorrect data.

## Getting Started

### Prerequisites

- **Gemini Pro API key**: Essential for leveraging the Gemini model's capabilities. Obtain your API key [here](https://ai.google.dev/gemini-api/docs/api-key).
- **Python 3.8 or newer**: Ensure that Python 3.8+ is installed on your system to run the chatbot application.

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourgithub/fstt-chatbot
   cd fstt-chatbot
   ```

2. **Set up the Python Environment**:

   ```bash
   python -m venv fstt_chatbot_env
   source fstt_chatbot_env\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Install FastAPI and Uvicorn**:
   ```bash
   pip install fastapi uvicorn
   ```

### Running the Application

- **Set the API Key**:
  For Unix or MacOS:

  ```bash
  export GEMINI_API_KEY="your_api_key"
  ```

  For Windows:

  ```cmd
  set GEMINI_API_KEY="your_api_key"
  ```

- **Run the FastAPI server**:

  ```bash
  uvicorn main:app --reload
  ```

- **Start the Frontend Application**:
  ```bash
  npm start
  ```
=======
# FSTT Chatbot Project Using RAG and Gemini API

## Project Description

The FSTT Chatbot is an advanced tool designed to facilitate real-time academic interactions by providing information related to courses, activities, and administrative queries at the Faculté des Sciences et Techniques de Tanger (FSTT). Utilizing cutting-edge Natural Language Processing (NLP) technologies, the chatbot ensures that both students and faculty have immediate access to the most relevant and up-to-date information.

## About RAG with Gemini

Retrieval Augmented Generation (RAG) is a powerful framework that combines the best of retrieval and generative NLP models. In this project, we integrate RAG with the Gemini API, enhancing the chatbot's ability to provide precise answers by pulling relevant information from a pre-indexed database before generating responses. This combination allows the chatbot to overcome traditional limitations of language models, such as producing outdated or contextually incorrect data.

## Getting Started

### Prerequisites

- **Gemini Pro API key**: Essential for leveraging the Gemini model's capabilities. Obtain your API key [here](https://ai.google.dev/gemini-api/docs/api-key).
- **Python 3.8 or newer**: Ensure that Python 3.8+ is installed on your system to run the chatbot application.

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourgithub/fstt-chatbot
   cd fstt-chatbot
   ```

2. **Set up the Python Environment**:

   ```bash
   python -m venv fstt_chatbot_env
   source fstt_chatbot_env\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Install FastAPI and Uvicorn**:
   ```bash
   pip install fastapi uvicorn
   ```

### Running the Application

- **Set the API Key**:
  For Unix or MacOS:

  ```bash
  export GEMINI_API_KEY="your_api_key"
  ```

  For Windows:

  ```cmd
  set GEMINI_API_KEY="your_api_key"
  ```

- **Run the FastAPI server**:

  ```bash
  uvicorn main:app --reload
  ```

- **Start the Frontend Application**:
  ```bash
  npm start
  ```
>>>>>>> e43fe2f133066848b4fb8a7f8b15239d6283deea
