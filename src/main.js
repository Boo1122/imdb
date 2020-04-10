import { Header } from "./components/Home_Page_Header/Home_Page_Header";
import { RegisterPage } from "./components/Pages/Register_Page/Register_Page";
import { LoginPage } from "./components/Pages/Login_Page/Login_Page";
import { HomePage } from "./components/Pages/Home_Page/Home_Page";
import "./main.css";
import { Footer } from "./components/Footer/Footer";
import { navigate } from "./components/Navigate_History/Navigate_History";
import { SinglePage } from "./components/Pages/Single_Page/Single_Page";
import { MoviePage } from "./components/Pages/Movie_Page/Movie_Page";
import { Caroussel } from "./components/Home_Page_Main/Caroussel/Caroussel";

new Header();
new HomePage();
new LoginPage();
new RegisterPage();
const singlePage = new SinglePage();
new MoviePage();
new Caroussel();
new Footer();

navigate.init(singlePage);
