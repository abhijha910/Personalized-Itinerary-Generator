from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
import random

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Sample dataset for destinations
destinations = [
    {'name': 'Bali', 'vibe': 'beach', 'activities': ['relaxation', 'surfing']},
    {'name': 'Paris', 'vibe': 'romantic', 'activities': ['sightseeing', 'dining']},
    {'name': 'New York', 'vibe': 'urban', 'activities': ['theater', 'shopping']},
]
@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.json
    preferred_vibe = data.get('companionVibe', 'beach')  # Default to 'beach'

    # Find recommended destinations based on the vibe
    recommended_destinations = [d for d in destinations if d['vibe'] == preferred_vibe]

    if not recommended_destinations:
        return jsonify({'error': 'No recommendations found'}), 404

    # Randomly choose one destination from the recommended list
    recommended_destination = random.choice(recommended_destinations)
    
    return jsonify(recommended_destination)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)  # Run the Flask app
