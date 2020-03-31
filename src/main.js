import { Header } from "./components/Home_Page_Header/Home_Page_Header";

import { LoginForm } from "./components/Pages/Login_Form/Login_Form";
import { switchLogin } from "./components/Pages/Login_Form/Switch_Log_Reg";
import { switchRegister } from "./components/Pages/Login_Form/Switch_Log_Reg";

new Header();
new LoginForm();

switchLogin();
switchRegister();
