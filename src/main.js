import { Header } from "./components/Home_Page_Header/Home_Page_Header";
import { RegisterForm } from "./components/Pages/Register_Form/Register_Form";
import { LoginForm } from "./components/Pages/Login_Form/Login_Form";
import { SinglePage } from "./components/Pages/Single_Page/Single_Page";
import { Switch } from "./components/Pages/Login_Form/Switch_Login_Register";
import { HomePage } from "./components/Pages/Home_Page/Home_Page";
import { getMovies } from "./components/FETCH API/Fetch_API";

new Header();
new LoginForm();
new RegisterForm();
new SinglePage();
new Switch();

new HomePage();
