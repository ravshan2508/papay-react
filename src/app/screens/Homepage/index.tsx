import { Container } from "@mui/system";
import { Advertisments } from "./advertisments";
import { BestDishes } from "./bestDishes";
import { BestRestaurants } from "./bestRestaurants";
import { Events } from "./events";
import { Recommendations } from "./recommendations";
import { Statistics } from "./statistics";
import { TopRestaurants } from "./topRestaurants";
import '../../../css/home.css';

export function Homepage () {
    return <div className="homepage">
        <Statistics/>
        <TopRestaurants/>
        <BestRestaurants/>
        <BestDishes/>
        <Advertisments/>
        <Events/>
        <Recommendations/>
        
    </div>;
}