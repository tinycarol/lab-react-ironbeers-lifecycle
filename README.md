![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | React IronBeersLifecycle

Since beer is one of the most consumed drinks between Ironhackers 🍻, our mission here is to create an app to showcase some of the best-handcrafted beers. Our end goal is creating something like this:

<div style="display: flex; justify-content: center">
<img src="https://user-images.githubusercontent.com/23629340/40706960-96223ade-63ef-11e8-9375-b7b6d091e716.png" height="600px" />
</div>

## Setup

- Fork this repo
- Clone the forked repo

```shell
$ cd lab-react-ironbeers
$ npm install
$ npm start
```

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.

## Introduction

We will be building a React app so the API (server) needs to be built somewhere for us, right? You are completely right, it's deployed on _heroku_ and the root fo the API is:
**`https://ih-beers-api2.herokuapp.com/beers`**.

There are multiple endpoints in this API, but we're only going to be using the following one:

| Method | Endpoint | Response (200) | Action                        |
| ------ | -------- | -------------- | ----------------------------- |
| GET    | /beers   | [beers]        | Get all the beers from the DB |

The **IronBeersLifecycle** project will use this enpdoint to **list the existing beers**.

## Instructions

❗ Shoot for the stars! Focus on **mobile first** design! This is a bonus, so it's up to you. 👍

### Iteration 1 | Empty state

To get started, we need to model our app, starting by creating a `BeersList` component. 

This component should initially just display a `Loading...` text. The reason is that, since the beers info comes from the API which can take some time to reply, we must display something while the user waits. So let's do just that!

### Iteration 2 | Getting the beers

Once we have that out of the way, we can focus on getting and diplaying the beers! 

The list of beers will come from the API, specifically from the beers endpont: `https://ih-beers-api2.herokuapp.com/beers`. We need `axios` for this! So the first step is to install it:

```
npm install axios
```

We know that API calls shouldn't be performed on the constructor or render method, but luckily we just found out about [the lifecycle of a React component](https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class). We only want the beers list to be loaded on the first render, so we should use the **componentDidMount** lifecycle method to get the beers.

🕵️ **Hint**: The array of beers is an array of objects. We strongly advise you to **open the URL** to see the response format in the browser!

You can start by dysplaying just the name of the beer.

The first time you call the API, it might take a bit to respond. It's hosted on Heroku, and it goes to sleep after 30 minutes, you know! :wink:

### Iteration 3 | Make it pretty

For this iteration, we want to expand the information we show. You should display the following from each of the beers:

- `image`
- `name`
- `tagline`
- `contributed_by`

Remember to think in React! You should create a `Beer` component for this 😉

<div style="display: flex; justify-content: center">
  <img src="https://user-images.githubusercontent.com/23629340/40706960-96223ade-63ef-11e8-9375-b7b6d091e716.png" height="600px" />
</div>

**We are done!** 🏆

Awesome! Grab a beer (if you're not underage :wink: )! Now you are a **React Warrior**, keep training to become the Ninja!

Happy coding! 💙
