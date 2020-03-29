import { Header } from "./components/Home_Page_Header/Home_Page_Header";
import { moviesButtonEventListenerHandler } from "./components/Pages/Movies_Page/Button_Clicked";
import { RegisterForm } from "./components/Pages/Register_Form/Register_Form";
import { LoginForm } from "./components/Pages/Login_Form/Login_Form";
import { SinglePage } from "./components/Pages/Single_Page/Single_Page";

new Header();
moviesButtonEventListenerHandler();

new RegisterForm();
new LoginForm();
new SinglePage();
