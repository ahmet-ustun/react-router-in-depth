import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { CareersLayout, HelpLayout, RootLayout } from "./layouts";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import { Contact, contactAction, Faq } from "./pages/help";

import {
  CareerDetails,
  careerDetailsLoader,
  Careers,
  careersLoader,
  CareersError,
} from "./pages/careers";

const browserRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>

      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareersError />}
      >
        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={browserRouter} />;
}

export default App;
