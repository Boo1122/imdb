import { Header } from "./components/Home_Page_Header/Home_Page_Header";
import { RegisterPage } from "./components/Pages/Register_Page/Register_Page";
import { HomePage } from "./components/Pages/Home_Page/Home_Page";
import { LoginPage } from "./components/Pages/Login_Form/Login_Page";
import { MoviePage } from "./components/Pages/Movie_Page/Movie_Page";
import { PosterClicked } from "./components/Pages/Single_Page/Poster_Clicked";

import "./main.css";
import { Footer } from "./components/Footer/Footer";

new Header();

new HomePage();
new LoginPage();
new RegisterPage();
new MoviePage();

new Footer();

new PosterClicked();
