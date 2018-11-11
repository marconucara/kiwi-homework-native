
## Setup

You should use node 10.13.0 and yarn 1.12.1, if you use nvm just run:

`nvm use`

Then:

`yarn`

You need also run [api](https://github.com/marconucara/kiwi-homework-api).


## Run the project

- Edit app.json and set apiEndPoint based on you local network. (Yes, this could be done better :sweat_smile:)

- Install Expo app on you phone (tested only in Adroid, but should be fine in iOS too)

- `npm start`

- Follow expo instructions.


## Technical notes

This project use web client as a dependency and include from it phone container, sagas, actions and reducers. In a real world project probably this parts should be moved in a separated project and imported from both web and native.
