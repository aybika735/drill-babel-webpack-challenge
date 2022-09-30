import './styles.css'
 import img from '../assets/logo.png';

const image = document.createElement('img')
image.src = img
document.body.append(image);
let name = 'Aybika';
const hello = (name) => `Hello, ${name}`;
console.log(hello);

 