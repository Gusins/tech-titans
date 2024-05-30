//todo: Зробити фунцію,та експортувати її в main.js
import axios, { Axios } from "axios";
import Swiper from 'swiper';
import 'swiper/css';


axios.defaults.baseURL = "https://portfolio-js.b.goit.study/api";
axios.get("/reviews/").then(res => { console.log(res.data); });




export * from "./reviews";