import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthLayout, Login } from "./componenets/index.js";

import AllPosts from "./pages/AllPost.jsx";
import EditPost from "./pages/EditPost.jsx";
import Signup from "./pages/Signup.jsx";
import Post from "./pages/Post.jsx";
import Home from "./pages/Home.jsx";
import AddPost from "./pages/AddPost.jsx";
import Pricing from "./pages/Pricing.jsx";
import AffiliateProgram from "./pages/AffiliateProgram.jsx";
import TermsAndConditions from "./pages/TermsAndCondition.jsx";
import FAQ from "./pages/FAQ.jsx";

import ContactPage from "./componenets/ContactPage.jsx";

import SupportPage from './componenets/SupportPage.jsx'
import LicensingPage from './pages/LicensingPage.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import ProfilePage from "./componenets/ProfilePage.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        store,
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/contactus",
        element: (
          <AuthLayout authentication={false}>
            <ContactPage />
          </AuthLayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authentication>
            {" "}
            <AllPosts />
          </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            {" "}
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            {" "}
            <EditPost />
          </AuthLayout>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/privacypolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/affiliate-program",
        element: <AffiliateProgram />,
      },
      {
        path: "/customer-support",
        element: <SupportPage />,
      },
      {
        path: "/termsandconditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/frequently-asked-questions",
        element: <FAQ />,
      },
      {
        path: "/contactus",
        element: (
          <AuthLayout authentication={false}>
            <ContactPage />
          </AuthLayout>
        ),
      },
      {
        path: "/licensing",
        element: <LicensingPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
