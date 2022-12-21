# FetchRewards
Fetch Rewards Take Home Exercise
## Installing
```bash
npm install
```

## Usage

### node
```json
// package.json
"scripts": {
  "start": "nodemon server/index.js",
  "react-dev": "webpack --mode development --watch"
}
```
```bash
npm start
npm run react-dev
```

## Features
This exercise was created using React with Babel & Webpack, ChakraUI component library, and an Express Node.JS server.

<img width="481" alt="image" src="https://user-images.githubusercontent.com/96090461/209003871-d3a3f08e-ed12-46c7-8aaa-f2eb9219584d.png">

### Fetch Rewards Minimum Requirements

1. Display a form with inputs for each field outlined below:
  - Full Name
  - Email
  - Password
  - Occupation
  - State
2. Allow a user to complete and submit the form
3. Do not allow form submission without completing the entire form
4. Provide feedback upon successful form submission

Occupation and State should allow users to select from options returned by an endpoint. Users should only be able to select one occupation and one state. A GET request to https://frontend-take-home.fetchrewards.com/form will return a JSON body with the following format:

```
{
    "occupations": [
        "occupation1",
        "occupation2",
        ...
    ],
    "states": [
        {
            "name": "Alabama",
            "abbreviation": "AL"
        },
        ...
    ]
}
```
You should submit the results of the form to the same endpoint (https://frontend-take-home.fetchrewards.com/form) via a POST request with a JSON body of the following format:
```
{
    "name": "???",
    "email": "???",
    "password": "???",
    "occupation": "???",
    "state": "???"
}
```
The POST endpoint will return a 201 status code if all fields are provided. The response body will be the created user object. It does not perform any validation beyond this.

### GET Request
A GET Request upon loading is made to the provided endpoint to retrieve the option lists for the Occupations and States selections.

```
  componentDidMount() {
    const Url = 'https://frontend-take-home.fetchrewards.com/form';
    axios({
      method: 'get',
      url: 'https://frontend-take-home.fetchrewards.com/form',
    })
    .then(result => this.setState({
      occupations: result.data.occupations,
      states: result.data.states
    }))
    .catch(err => console.log(err))
  }
```  

>{"occupations":["Head of Shrubbery","Interim Substitute Teacher","Water Softener","Listener of the House","Really Good Dancer","Gainfully Unemployed","Alexa Impersonator","Chard Farmer","Chief Frolicker (Jolly)","Entry-level Seat Recliner","CEO (Summer Internship)","Widget Fabricator","Underwater Basket Weaver"],"states":[{"name":"Alabama","abbreviation":"AL"},{"name":"Alaska","abbreviation":"AK"},{"name":"Arizona","abbreviation":"AZ"},{"name":"Arkansas","abbreviation":"AR"},{"name":"California","abbreviation":"CA"},{"name":"Colorado","abbreviation":"CO"},{"name":"Connecticut","abbreviation":"CT"},{"name":"Delaware","abbreviation":"DE"},{"name":"District Of Columbia","abbreviation":"DC"},{"name":"Florida","abbreviation":"FL"},{"name":"Georgia","abbreviation":"GA"},{"name":"Hawaii","abbreviation":"HI"},{"name":"Idaho","abbreviation":"ID"},{"name":"Illinois","abbreviation":"IL"},{"name":"Indiana","abbreviation":"IN"},{"name":"Iowa","abbreviation":"IA"},{"name":"Kansas","abbreviation":"KS"},{"name":"Kentucky","abbreviation":"KY"},{"name":"Louisiana","abbreviation":"LA"},{"name":"Maine","abbreviation":"ME"},{"name":"Maryland","abbreviation":"MD"},{"name":"Massachusetts","abbreviation":"MA"},{"name":"Michigan","abbreviation":"MI"},{"name":"Minnesota","abbreviation":"MN"},{"name":"Mississippi","abbreviation":"MS"},{"name":"Missouri","abbreviation":"MO"},{"name":"Montana","abbreviation":"MT"},{"name":"Nebraska","abbreviation":"NE"},{"name":"Nevada","abbreviation":"NV"},{"name":"New Hampshire","abbreviation":"NH"},{"name":"New Jersey","abbreviation":"NJ"},{"name":"New Mexico","abbreviation":"NM"},{"name":"New York","abbreviation":"NY"},{"name":"North Carolina","abbreviation":"NC"},{"name":"North Dakota","abbreviation":"ND"},{"name":"Ohio","abbreviation":"OH"},{"name":"Oklahoma","abbreviation":"OK"},{"name":"Oregon","abbreviation":"OR"},{"name":"Pennsylvania","abbreviation":"PA"},{"name":"Rhode Island","abbreviation":"RI"},{"name":"South Carolina","abbreviation":"SC"},{"name":"South Dakota","abbreviation":"SD"},{"name":"Tennessee","abbreviation":"TN"},{"name":"Texas","abbreviation":"TX"},{"name":"Utah","abbreviation":"UT"},{"name":"Vermont","abbreviation":"VT"},{"name":"Virginia","abbreviation":"VA"},{"name":"Washington","abbreviation":"WA"},{"name":"West Virginia","abbreviation":"WV"},{"name":"Wisconsin","abbreviation":"WI"},{"name":"Wyoming","abbreviation":"WY"}]}

### Form Submission

User is unable to submit the form without completing the entire form

<img width="364" alt="Screen Shot 2022-12-21 at 1 37 53 PM" src="https://user-images.githubusercontent.com/96090461/209007340-77ae8d1b-c574-4c80-9c3c-8bc94e4924fd.png">

Form provides feedback upon successful form submission

<img width="451" alt="image" src="https://user-images.githubusercontent.com/96090461/209007624-d75b3ff8-b306-4fe9-a061-e04381825104.png">

### POST Request

A POST Request is made upon form submission to the provided endpoint with a JSON body containing the user-provided information and returns a 201 status code.

```
// Client
  handleSubmit (e) {
    e.preventDefault();

    axios({
      method: 'post',
      url: '/postForm',
      data: this.state
    })
    .then(this.props.handleSubmit())
  }
  
// Server
  app.post('/postForm', (req, res) => {
    const Url = 'https://frontend-take-home.fetchrewards.com/form';
    axios({
      method: 'post',
      url: Url,
      data: req.body
    })
    .then(result => res.sendStatus(201))
    .catch(err => res.send(err))
  })
```
<img width="353" alt="image" src="https://user-images.githubusercontent.com/96090461/209009663-f5a50dc6-261c-48a7-94d9-7d803c459baa.png">
<img width="676" alt="Screen Shot 2022-12-21 at 1 54 33 PM" src="https://user-images.githubusercontent.com/96090461/209009603-82c45ca4-f085-4f59-a27d-f055da7acb72.png">
