<<<<<<< HEAD
# personalized-travel-itinerary

This project generates personalized travel itineraries based on user data such as preferences, expenses, reviews, and the vibe of their travel companions. It uses a **Node.js backend** to handle the API requests and a **Flask (Python) service** to provide AI-driven itinerary recommendations.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)
- [License](#license)

## Project Overview

The **Personalized Travel Itinerary Generator** aims to create an AI-driven backend system that recommends travel destinations and activities based on user preferences, budget, reviews, and companion vibes. This system is designed to handle real-time input from users and provide dynamic travel itineraries.

### Objective

We are building a travel companion app that provides personalized travel itineraries based on a user's preferences, behaviors, and travel history. The goal is to assess your ability to design an intelligent system that generates personalized itineraries using user data (expenses, vibe, reviews, Instagram photos, travel mates, etc.) and evaluate your proficiency in AI, backend engineering (Node.js), and cloud architecture (AWS).

## Features

- Generate travel itineraries based on user preferences and budget.
- Analyze travel companion vibes to provide personalized recommendations.
- Fetch data from an AI-driven Flask service for itinerary generation.
- API-based architecture to support front-end integrations or third-party services.

## Technologies Used

- **Node.js** (Backend API)
- **Express.js** (API framework for Node.js)
- **Python** (For AI-driven recommendations)
- **Flask** (Python microservice framework)
- **Flask-CORS** (Cross-Origin Resource Sharing for Flask)
- **Axios** (For HTTP requests from Node.js to Flask)
- **Google Cloud Platform (GCP)** or **AWS** for deployment
- **Postman** (For API testing)

## Installation

### Prerequisites

Make sure you have the following installed:

- **Node.js** (version 14 or later)
- **npm** (comes with Node.js)
- **Python 3.x** with `pip`
- **Git** (for cloning the project)

## Deployment

### Deploying on AWS

1. **Create an EC2 Instance**:
   - Log in to your [AWS Management Console](https://aws.amazon.com/console/).
   - Navigate to the **EC2 Dashboard**.
   - Click on **Launch Instance**.
   - Choose an **Amazon Machine Image (AMI)**. Select **Ubuntu** (preferably the latest LTS version).
   - Choose an **Instance Type** (e.g., `t2.micro` for the free tier).
   - Click on **Next: Configure Instance Details** and keep the default settings unless you have specific requirements.
   - In the **Configure Security Group** step:
     - Create a new security group or select an existing one.
     - Add rules to allow HTTP (port 80), HTTPS (port 443), and custom TCP rules for Node.js and Flask:
       - **Custom TCP** for Node.js: Port `3000`
       - **Custom TCP** for Flask: Port `5000`
   - Click on **Review and Launch**, then **Launch** the instance.
   - When prompted, create a new key pair or select an existing one, then download the `.pem` file for SSH access.

2. **SSH into the Instance**:
   - Open a terminal (or Command Prompt on Windows) and navigate to the directory where your `.pem` file is located.
   - Run the following command to SSH into your instance:
     ```bash
     ssh -i "your-key-file.pem" ubuntu@<YOUR_PUBLIC_IP>
     ```
   - Replace `your-key-file.pem` with the name of your key file and `<YOUR_PUBLIC_IP>` with the public IP address of your EC2 instance.

3. **Install Node.js and Python**:
   - Once logged in, update the package lists and install Node.js and npm:
     ```bash
     sudo apt update
     sudo apt install nodejs npm
     ```
   - Install Python and Flask:
     ```bash
     sudo apt install python3 python3-pip
     pip3 install Flask Flask-CORS
     ```

4. **Clone the Project from GitHub**:
   - Make sure Git is installed. If it's not, install it with:
     ```bash
     sudo apt install git
     ```
   - Clone your project repository:
     ```bash
     git clone https://github.com/abhijha910/personalized-travel-itinerary.git
     cd personalized-travel-itinerary
     ```

5. **Run Both the Flask and Node.js Servers**:
   - Start the Flask service:
     ```bash
     python3 recommendation.py
     ```
   - Open a new terminal or SSH session to the same instance.
   - Navigate to your project directory and start the Node.js server:
     ```bash
     node server.js
     ```

6. **Access the Application Using the Public IP of the Instance**:
   - Open a web browser or Postman.
   - Access the Node.js API using the public IP of your instance:
     ```plaintext
     http://<YOUR_PUBLIC_IP>:3000/generate-itinerary
     ```
   - Replace `<YOUR_PUBLIC_IP>` with the actual public IP of your EC2 instance.

### 2. Implement Additional Features

Ensure that your project now includes:

- **User Data Preprocessing**: Add functions to clean and preprocess your user data.
- **User Segmentation Logic**: Implement clustering algorithms to segment users.
- **Recommendation Engine**: Code to generate recommendations based on user data.
- **Itinerary Generation Logic**: Complete logic that creates a full itinerary based on the selected destination.

### 3. Testing Your Application

Once you've updated the project:

1. **Run Tests**: Use Postman to ensure that your API endpoints are working as expected.
2. **Check Integration**: Make sure that the Flask service is returning the expected data when called by the Node.js backend.
3. **Review Code**: Ensure your code is clean, well-commented, and follows best practices.

### 4. Final Documentation

Finally, ensure that your documentation is clear, covering how the system works, how to set it up, and any assumptions or constraints you've encountered during development.

If you need any further specific code snippets, explanations, or help with any part of this process, feel free to ask!

### Clone the Repository

```bash
git clone https://github.com/abhijha910/personalized-travel-itinerary.git
cd personalized-travel-itinerary



=======
# Personalised Travel Itinerary Generator

This is a web application that generates personalized travel itineraries based on user preferences, such as budget, interests, and trip duration. The application offers a user-friendly interface for inputting preferences and deliver detailed, dynamic itineraries tailored to individual users.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies and Libraries Used](#technologies-and-libraries-used)
4. [Installation](#installation)
5. [Models Used](#models-used)

## Project Overview

This application provides a web interface for creating your prefered itinerary for their desired destination. It has a user friendly form to fill for preferences such as destination, duration, budget and travelers. And using this information we create a personalized itinerary for the user. Leveraged Gemini's API to generate personalized travel itinerary for the user.

## Features

- User Authentication.
- User friendly interface.
- Leveraged Gemini's API to generate personalized travel itinerary for the user
- User can view their detailed itinerary.
- User can view their created trip too.
- User receives the entire itinerary in PDF form via mail

## Technologies and Libraries Used

- **Backend**:

  - Typescript: Implemented MVC structure in OOP fashion and ensured type safety of the data using typescript.
  - Node.js: Used to setup the environment for backend.
  - Express.js: Built scalable backend server.
  - Mongo DB: Stored the user info and itinerary details using mongo database.
  - Redis: Used redis for rate limiting of creating trips.
  - Puppeteer: Used to convert the generated Itinerary to PDF format.
  - Nodemailer: Used to mail the itinerary in PDF form to the user's email.
  - Docker: Leveraged docker to containerize the application.
  - Continuous Integration(CI): Impleneted Continuous Integration pipeline for lint check and healthy build for pull request at main branch.

- **Frontend**:

  - Typescript: Ensured type safety of the data using typescript and enhances development efficiency, code quality, and maintainability.
  - Next.js: Built the entire client side and integrating backend apis using Next.js.
  - Tailwind CSS: Used tailwind css for responsive interface for across all devices.
  - Shadcn UI: Leveraged Shadcn UI library for building user friendly UI components.
  - Docker: Leveraged docker to containerize the application.
  - Continuous Integration(CI): Impleneted Continuous Integration pipeline for lint check and healthy build for pull request at main branch.

- **Models**:
  - Gemini AI Model for generating user personalized itinerary.
  - Google Maps API for directing to specific destination location.


## View website

Here is the deployed website : [Deployed Link](https://personalized-itinerary-generator.vercel.app/)<br>
Here is the deployed backend server: [Backend Link](https://personalized-itinerary-generator.onrender.com/)

## Installation

To install and run this project locally, add the following commands in your terminal, follow these steps:

1. Clone the repository from GitHub:

```bash
    git clone https://github.com/omkargade04/Personalized-Itinerary-Generator.git
```

2. Navigate into the project directory:

```bash
   cd Personalized-Itinerary-Generator
```

3. Navigate into client:

```bash
   cd frontend
```

4. Navigate into server:

```bash
   cd backend
```

## Important

5. Ensure that the version of `Node.js` and `npm` you're using is compatible with the dependencies you're installing. Some dependencies may require specific Node.js versions.
   Run the below command in **frontend** directory and **backend** directory.

```bash
   npm install -g npm@latest
```

6. Install `dependencies` for the frontend in **frontend** directory (assuming you have `Node.js` and `npm` installed):

```bash
   npm install
```

7. Install `dependencies` for the backend in **backend** directory (assuming you have `Node.js` and `npm` installed):

```bash
   npm install
```

8. Create a .env file in the **frontend** directory and add backend **api endpoint**:

`NEXT_PUBLIC_BASE_URL`=`http://localhost:8000` (for **local** backend)

`NEXT_PUBLIC_BASE_URL`=`https://personalized-itinerary-generator.onrender.com` (for **deployed** backend)

`NEXT_PUBLIC_GOOGLE_PLACE_API_KEY`=`google-place-api-key`

`NEXT_PUBLIC_GEMINI_API_KEY`=`gemini-api-key`

9. Create a .env file in the **backend** directory and connect your database with prisma via database url:

`PORT`=`8000` <br>

`MONGO_URL`=`mongodb+srv://<username>:<password>@cluster0.dvriq5l.mongodb.net/<db_name>` <br>

`SECRET_TOKEN`=`your-token` <br>

`REDIS_URL`=`https://casual-pig-60980.upstash.io:6379` <br>

`REDIS_TOKEN`=`upstash-redis-token` <br>

`NODE_ENV`=`development` <br>

`MAIL_USERNAME`=`your-email@gmail.com` <br>

`MAIL_PASSWORD`=`your-password` <br>

`GOOGLE_PLACE_API_KEY`=`your-google-place-api-key` <br>

10. Start the frontend and backend servers:

    **backend**: `npm run dev`<br>
    **frontend**: `npm run dev`

11. Open `http://localhost:3000` to view the application.

## Run the project via **Docker**

## Prerequisites

- Docker

## For Linux System:

To install Docker, run the following commands in your terminal:

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

## Development Environment For Server

- Navigate into **backend** directory
- To get started with development first build the dev containers using the following command

```bash
docker-compose -f docker-compose.yaml build
```

- The env file being used for development is called `.env`
- Run the containers using the command

```bash
docker-compose -f docker-compose.yaml up
```

## Development Environment For Client

- Navigate into **frontend** directory
- To get started with development first build the dev containers using the following command

```bash
docker-compose -f docker-compose.yaml build
```

- The env file being used for development is called `.env`
- Run the containers using the command

```bash
docker-compose -f docker-compose.yaml up
```
>>>>>>> be312c0 (Initial commit of Personalized Itinerary Generator project)
