# Readme #
This is the readme for this project. It will include any useful links and commands to run

## Step One ##
Create a new empty folder. Open an IDE and open the newly created folder. This will be the workspace

## Step Two ##
Using the terminal of the IDE clone the GitHub repository using the following command:  
`git clone https://github.com/djjtyn/nci_cryptocurrency.git`

## Step Three ##
When the GitHub repository has been cloned, enter the nci_cryptocurrency folder using the following command in the IDE terminal  
`cd nci_cryptocurrency`

## Step Four ##
Check if Docker is installed in the IDE environment. To check type the follwing into the IDE terminal
`docker --version`  
If a Docker version is displayed, Docker is installed. If a Docker version is not displayed install Docker using the following command in theIDE terminal   
`sudo apt-get install docker-engine -y`

## Step Five ##
Next the applications environment variables need to be set. Right click on the nci_cryptocurrency folder and select the New File option.   
Call this new file '.env'

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

