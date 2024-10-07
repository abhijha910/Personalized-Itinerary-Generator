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


### Clone the Repository

```bash
git clone https://github.com/abhijha910/personalized-travel-itinerary.git
cd personalized-travel-itinerary



