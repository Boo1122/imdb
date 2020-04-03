import { Header } from "./components/Home_Page_Header/Home_Page_Header";
import { RegisterForm } from "./components/Pages/Register_Form/Register_Form";
import { HomePage } from "./components/Pages/Home_Page/Home_Page";
import { LoginForm } from "./components/Pages/Login_Form/Login_Form";
import { MoviePage } from "./components/Pages/Movie_Page/Movie_Page";
import { Switch } from "./components/Pages/Login_Form/Switch_Login_Register";
import { RegisterPage } from "./components/Pages/Register_Form/Register_Page";
import "./main.css";
import { Footer } from "./components/Footer/Footer";

new Header();
new RegisterForm();

new HomePage();
new LoginForm();
new MoviePage();

new RegisterPage();
new Footer();

new Switch();
