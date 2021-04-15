import SingUp from "./pages/singup";
import { BrowserRouter, Route } from "react-router-dom";
import Products from "./pages/products";
import Complements from "./pages/complements";
import Finished from "./pages/finished";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={SingUp} />
      <Route path="/products" component={Products} />
      <Route path="/complements" component={Complements} />
      <Route path="/finalized" component={Finished} />
    </BrowserRouter>
  );
}

export default Routes;
