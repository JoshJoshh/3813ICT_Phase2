The git repository is the whole project, including the node.js server, the angular frontend and all the npm modules

entries categorised as "User" are stored in the mongodb database as follows:
*_id: default ObjectId
*name: string containing username
*password: string containing password
*role: string containing role
*groups: array of strings containing names of groups

entries categorised as "group" are stored in the mongodb database as follows:
*_id: default ObjectId
*name: string containing name of group
*members: array of strings containing usernames in group

entries categorised as "chat" are stored in the mongodb database as follows:
*_id: default ObjectId
*name: string containing name of chat
*group: string containing parent group
*messages: array of strings containing five most recent messages posted in chat

The routes and components are as follows:
*App: default component
*Login: router before signing in
*Account: router after signing in
*document: socket text
*document-list: socket list