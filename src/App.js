import "bootstrap/dist/css/bootstrap.min.css";
import HomepageCart from "./Components/Carts/homepagecart/HomepageCart";
import HomePage from "./Pages/HomePage/HomePage";
// import HomePageBanner from "./Components/BannerSection/homePageBanner/HomePageBanner";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./Components/Header/Header";
import CoursePage from "./Pages/CoursePage/CoursePage";

import "./styles.css";
import CourseQuickView from "./OtherComponents/ToolTip/CourseQuickView";
import DevelopmentCard from "./Components/Carts/DevelopmentCourseCard/DevelopmentCard/DevelopmentCard";
import CategoryPage from "./Pages/CategoryPage/CategoryPage";
import TopicPageCardLeft from "./Components/Carts/TopicPageCard/TopicPageCardLeft";
import TooltipRight from "./OtherComponents/ToolTip/TooTipRIght/TooltipRight";
import ProductPageBanner from "./Components/BannerSection/ProductPageBanner/ProductPageBanner";
import ProductDetailsPage from "./Pages/ProductDetailsPage/ProductDetailsPage";
import Studentsalsobought from "./Components/Carts/ProductPageCard/Studentsalsobought/Studentsalsobought";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/CoursePage">CoursePage</Link>
        <Link to="/CategoryPAge">Category Page</Link>
        <Link to="/ProductPage">Product Page</Link>
        <Route exact path="/" component={HomePage} />
        <Route path="/CoursePage" component={CoursePage} />
        <Route path="/ProductPage" component={ProductDetailsPage} />
      </Router>

      {/* <ProductDetailsPage /> */}
      {/* <Studentsalsobought /> */}
    </div>
  );
}
