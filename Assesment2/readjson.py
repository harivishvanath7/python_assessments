import json

# Open the JSON file for reading
with open('ex5.json', 'r') as file:
    # Load the JSON data into a Python dictionary
    ex5 = json.load(file)

# Iterate over each donut in the JSON data
for donut in ex5:
    # Check if the name of the current donut is "Old Fashioned"
    if donut["name"] == "Old Fashioned":
        # If it is, append a new batter called "Tea" to its list of batters
        donut["batters"]["batter"].append({"id": "1005", "type": "Tea"})

# Open the same JSON file for writing
with open('ex5.json', 'w') as file:
    # Write the updated JSON data back to the file with proper indentation
    json.dump(ex5, file, indent=4)

# Print a message indicating that the batter named 'Tea' was added to the donut with the name 'Old Fashioned'
print("Batter named 'Tea' added to the donut with name 'Old Fashioned' and ex5.json updated successfully.")
