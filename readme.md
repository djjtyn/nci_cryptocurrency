# Readme #

This is the readme for this project. It will include any useful links and commands to run

## Step One ##
Create a new empty folder. Open an IDE and usre the newly created folder as a workspace

## Step Two ##
Using the terminal of the IDE clone the GitHub repository using the following command:  
`git clone https://github.com/djjtyn/nci_cryptocurrency.git`

## Step Three ##
If the IDE environment doesn't already have Docker installed, install it using the following command in the IDE terminal:  
`sudo apt-get install docker-engine -y`

## Step Four ##
Next the applications environment variables need to be set. In the projects root directory create a new file and call it '.env'

## Step Five ##
Open the .env file and enter the following key/value pairs as follows (NOTE: VALUES WILL BE PROVIDED IN EXTERNAL 'dotenv' FILE.):  
INFURA_TOKEN=  
CONTRACT_ADDRESS=  
SUPER_SECRET_PRIVATE_KEY=  
OWNER_ADDRESS=  

## Step Six ##
Now the environment variables are set, run the program via docker by typing the following command in the IDE terminal
`docker-compose up`

## Step Seven ##
The application can be seen running in the IDE terminal

