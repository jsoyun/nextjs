import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import imageLoader from "../styles/imageLoader";
import { Character, GetCharacterResults } from "./types";
import { Footer } from "../components/Footer";
import { Button } from "../components/styles/button/Button";
const Home: NextPage<{ characters: Character[] }> = ({ characters }) => {
  return (
    <div>
      <Footer />

      {/* <div>
        DB_CONNECT:
        {process.env.NEXT_PUBLIC_DB_CONNECT}
        <hr />
      </div> */}
      <Button>dfdf</Button>

      <Link href="/">ㅇㄹㅇㄹㅇ</Link>
      <Link href="/characters">캐릭터</Link>
    </div>
  );
};

export default Home;
