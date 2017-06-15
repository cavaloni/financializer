# Financializer

An app to help you plan your investments. Using mock data. 

## Getting started

Clone locally:

`git clone https://github.com/cavaloni/financializer.git`

Then

`npm install` 

&&

`npm run dev-build`

Then open a browser and visit `localhost:8081`

## Video

If all else fails, a video of the app in action can be seen at https://youtu.be/AtOj6rVekZ8

### Testing

Testing has not been completed yet. The approach would have been as follows:

-Unit tests for each React Component would have minimally tested for truthiness.
-Snapshot tests would be implemented from this point forward with a working minimum viable product.
-Snapshots of responsiveness would also be used. 

-The primary algortithm would have been tested against specific known output values; which would essentially
be the total amount of the users money mutlipled by the percentage of the category derived from the desired risk level.

### Time alottment

Time taken for each aspect of the work was as follows:

-4 hours basic app structure, including React components and Redux setup
-2.5 hours on primary algorithm (very long I know! Had initial concept within first 10 minutes, but implementation details became tricky)
-1.5 hours on responsiveness
-3 hours styling