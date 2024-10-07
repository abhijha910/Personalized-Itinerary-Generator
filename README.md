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

### Clone the Repository

```bash
git clone https://github.com/abhijha910/personalized-travel-itinerary.git
cd personalized-travel-itinerary


### Deploying on Google Cloud Platform (GCP)
1. Create a **VM Instance** with Ubuntu as the OS.
2. SSH into the instance and install Node.js and Python.
3. Clone the project from GitHub.
4. Run both the Flask and Node.js servers.
5. Set up **Firewall Rules** to allow traffic on ports 3000 and 5000.
6. Access the application using the public IP of the instance.

