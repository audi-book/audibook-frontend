'use client';
import Image from "next/image";
import styles from "./page.module.css";
import ResponsiveAppBar from "./components/navbar/navbar";
import NavBar from "./components/navbar/navbar";
import ImageSlider from "./components/image-slider/image-slider";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <>
    <NavBar />
    <ImageSlider />
    <Footer/>
    </>
  );
}