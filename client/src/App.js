import { Fragment } from "react";
import "./App.css";
import "./App.scss";
import AppHeader from "./components/AppHeader";
import PostInput from "./components/PostInput";
import PostList from "./components/PostList";

function App() {
  return (
    <Fragment>
      <div className="container vh-100">
        <AppHeader />
        <PostInput />
        <PostList />
      </div>
    </Fragment>
  );
}

export default App;
