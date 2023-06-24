"use client";
import { GetServerSideProps,NextPage } from "next";
import { useEffect,useState } from "react";
import styles from "./index.module.css";
 
type Props = {
  initialImageUrl: string;
};

const IndexPage: NextPage = () => {
  const [imageUrl,setImageUrl] = useState("");
  const [loading,setLoading] = useState(true);
  useEffect(()=> {
    fetchImage().then((newImage) => {
      setImageUrl(newImage.url);
      setLoading(false);
    });
  },[]);
  const handleClick = async () => {
    setLoading(true);
    const newImage = await fetchImage();
    setImageUrl(newImage.url);
    setLoading(false);
  };
  return <div className={styles.page}>
    <button className={styles.button} onClick={handleClick}>他のねこをみる</button>
    {loading || <img className={styles.img} src={imageUrl}/>}</div>;
};
export default IndexPage;

type Image = {
  url: string;
};

const fetchImage = async ():Promise<Image> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const images = await res.json();
  console.log(images);
  return images[0];
};

fetchImage();


