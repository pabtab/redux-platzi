import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
// import Playlist from './src/playlist/components/playlist';

// console.log('Hola mundo!' )
import normalizedData from '../schemas/index.js';

import AppProvider from './AppProvider';

console.log(normalizedData)

const homeContainer = document.getElementById('home-container')

// ReactDOM.render(que voy a renderizar, donde lo haré);
// const holaMundo = <h1>hola Estudiante!</h1>;
render(<AppProvider />, homeContainer);

