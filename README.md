This is a TOP COINS- Crypto analysis webapp

To view the output in the development mode, follow the steps as given below:
1) In the console, navigate to the project folder.
2) Run command "npm install". This will install all the dependencies and creates a node-modules folder.
   This process takes around 5-8 mins to complete.
4) Run command "npm start". Runs the app in the development mode.
   Open [http://localhost:3000] to view it in the browser.
5) Run command "npm test" to run all the test cases.

Highlights:-
- The API endpoint at coinmarketapp.com was returning status 429 indicating too many attempts and was getting blocked.
- Hence used fake api live json-server to perform API calls for fetching same JSON data of all the coins. 
- Used numeral library for currency formatting
- Used node-sass library for using scss and it's features
- Redux for managing the store values.
- Used CanvasJS library for rendering scatter points graph.
- The design is responsive.

Features:-
- At home page the market overview table is displayed. 
- The number of coins can be changed from the dropdown. By default 10 is selected.
- When clicked on 2nd tab Liquidity analysis, corresponding page with a graph is displayed. 