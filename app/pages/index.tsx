import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import imageLoader from "../styles/imageLoader";
import { Character, GetCharacterResults } from "./types";

const Home: NextPage<{ characters: Character[] }> = ({ characters }) => {
  return (
    <div>
      {/* <div>{JSON.stringify(characters)}</div> */}

      <div>
        DB_CONNECT:
        {process.env.NEXT_PUBLIC_DB_CONNECT}
        <hr />
        {characters.map((character) => {
          return (
            <div key={character.id}>
              <Link href={`/characters/${character.id}`}>
                <a>
                  <h3>{character.name}</h3>
                </a>
              </Link>
              <h1> {character.name}</h1>

              <Image
                loader={imageLoader}
                unoptimized
                src={character.image}
                alt={character.name}
                width="200"
                height="200"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const { results }: GetCharacterResults = await res.json();
  return {
    props: {
      characters: results,
    },
  };
};
export default Home;
