import React from "react";
import unsplash from "./api/unsplash";
//import logo from './logo.svg';
import "./App.css";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
class App extends React.Component {
  state = {
    images: []
  };
  onSearchSubmit = async props => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: props
      }
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div
        className="App ui container"
        style={{ margin: "10px", color: "black", width: "absolute" }}
      >
        <h1> Searching app </h1>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
