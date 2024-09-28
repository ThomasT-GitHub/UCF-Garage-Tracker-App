# Step 1: Use a Node.js base image
FROM node:16

# Step 2: Install Expo CLI
RUN npm install -g expo-cli

# Step 3: Create and set the working directory
WORKDIR /app

# Step 4: Copy project files into the container
COPY . .

# Step 5: Install project dependencies
RUN npm install

# Step 6: Start the Expo development server
CMD ["npx", "expo", "start", "--tunnel"]