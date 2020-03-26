console.log("start");

import { Header } from "./components/Home_Page_Header/Home_Page_Header";
import { MoviesCategoryFilter } from "./components/Pages/Movies_Page/Movies_Category_Filter";

new Header();

new MoviesCategoryFilter("Title");
new MoviesCategoryFilter("Year");
new MoviesCategoryFilter("Runtime");
new MoviesCategoryFilter("Genre");
