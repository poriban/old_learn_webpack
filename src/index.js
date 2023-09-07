import { Header } from './app/header';let header = new Header();
import '../src/style.css';
import './styles/scss/main.scss';
import webpackgif from './assets/images/webpack.gif';

let firstHeading = header.getFirstHeading();
console.log(firstHeading);

document.getElementById('webpack-gif').setAttribute('src', webpackgif);