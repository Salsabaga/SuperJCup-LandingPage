# Landing Page - Super J Cup

## How to Start

A simple landing page that can be accessed via the link in my portfolio, but to start the program via a IDE, `npm start `

## Custom Built UI Features

### Carousel

The carousel (slideshow) allows users to view major important events or features that the client wants to prioritise, and using a timed, automatic scroll/transition for a continuous "show" experience.

Making a carousel with react allows a declarative approach to the transition process, utilisting the useState hook to manipulate the index of each picture to show and activate the css class features. For this to accomplish rather than showing just one picure inside the carousel container, I would map the whole array of pictures, and reduce its opacity to 0, and once the index is active, another css class is added to show the picture.

useEffect is a useful hook to allow side-effects in functional components, especially when manipulation DOM elements. Thus by using the hook with timing features, such as setInterval, I can manipulate the state of the picture state, and featuring the clean-up feature removes any data leaks and smoother performance.

_Enter picture diagram of Carousel here for next commit_

#### Thank you for reading, for any questions or to check out more of my work, please visit my github profile or check out my portfolio.

Danny Baldeon Abril | 2022
