"use client";
import { useState, useRef } from "react";
import ColorThief from "colorthief";
import DisplayImage from "./DisplayImage";
import Header from "../Header";

const UploadImage: React.FC = () => {
  const [uploadImage, setUploadImage] = useState<string | ArrayBuffer | null>(
    null
  );
  const [colorPalette, setColorPalette] = useState<Array<string>>([]);
  const handleUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const img = new Image();
    img.onload = () => {
      const colorThief = new ColorThief();
      const colors = colorThief.getPalette(img);
      const colorPalette = colors.map((color: number[]) =>
        color.map((c) => c.toString())
      );
      setUploadImage(URL.createObjectURL(file));
      setColorPalette(colorPalette);
    };
    img.src = URL.createObjectURL(file);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <input
        type="file"
        ref={inputRef}
        className="hidden"
        onChange={handleUploadImage}
      />
      <Header
        handleChange={handleUploadImage}
        handleUploadImage={handleUploadImage}
      />
      <DisplayImage uploadedImage={uploadImage} colorPalette={colorPalette} />
    </>
  );
};
export default UploadImage;
