import { Header } from "./components/Home_Page_Header/Home_Page_Header";
import { RegisterPage } from "./components/Pages/Register_Page/Register_Page";
import { HomePage } from "./components/Pages/Home_Page/Home_Page";
import { LoginPage } from "./components/Pages/Login_Page/Login_Page";
import { MoviePage } from "./components/Pages/Movie_Page/Movie_Page";
import "./main.css";
import { Footer } from "./components/Footer/Footer";
import { navigate } from "./components/Navigate_History/Navigate_History";
import { SinglePage } from "./components/Pages/Single_Page/Single_Page";
import { MoviesPage } from "./components/Pages/Movies_Page/Movies_Page";

new Header();
new HomePage();
new MoviePage();
new LoginPage();
new RegisterPage();
new SinglePage();
new MoviesPage();

new Footer();
navigate.init();
