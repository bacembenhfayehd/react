import React, { useState } from "react";
import one from "./images/avatar12.jpg";
import two from "./images/avatar13.jpg";
import three from "./images/avatar15.jpg";
import four from "./images/avatar5.jpg";
import five from "./images/avatar3.jpg";
import Image from "./components/Image";
import Search from "./components/Search";

function App() {
  // const [state,setState] = useState(valeur initiale = données)
  const [images, setImages] = useState([
    {
      id: 1,
      image: one,
      title: "first one",
      description: "this is the first avatar",
    },
    {
      id: 2,
      image: two,
      title: "second one",
      description: "this is the first avatar",
    },
    {
      id: 3,
      image: three,
      title: "third one",
      description: "this is the first avatar",
    },
    {
      id: 4,
      image: four,
      title: "fourth one",
      description: "this is the first avatar",
    },
    {
      id: 5,
      image: five,
      title: "fifth one",
      description: "this is the first avatar",
    },
  ]);

  const [filtredImages, setFiltredImages] = useState(images);

  const deleteImage = (id) => {
    setFiltredImages(filtredImages.filter((image) => image.id !== id));
    setImages(images.filter((image) => image.id !== id));
  };

  const filterImages = (query) => {
    setFiltredImages(
      images.filter((image) => image.title.toLowerCase().includes(query.toLowerCase())));
  };

  return (
    <div>
      <h2>Gallerie d'images</h2>
      <Search filterImages={filterImages}  />
      <Image images={filtredImages} deleteImage={deleteImage} />
    </div>
  );
}

export default App;
