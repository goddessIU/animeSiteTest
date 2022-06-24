import { useEffect } from "react";
import styles from "./HomePage.module.css";
import {
  getAllRecommendationsAsync,
  selectRecommendations,
} from "../../features/recommendations/recommendationsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Card from "antd/lib/card/Card";
import { useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

interface animeEntryState {
  images: any;
  mal_id: number;
  title: string;
  url: string;
}

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const recommendations = useAppSelector(selectRecommendations);
  const data = recommendations.data.slice(20);
  // console.log(recommendations)
  useEffect(() => {
    dispatch(getAllRecommendationsAsync());
  }, []);

  const toAnimeDetail = (id: number) => {
    navigate(`/animeDetail/${id}`)
  }

  return (
    <div className={styles["flex-Row4"]}>
      {data.map((animeWrap) => {
        const anime: animeEntryState = animeWrap.entry[0]

        return (
          <Card
            className={styles["card"]}
            onClick={() => toAnimeDetail(42963)}
            key={nanoid()}
            cover={
              <div className={styles['cover']}>
                <img alt={anime.title} src={anime.images.jpg.image_url} />
              </div>
            }
          >
            <h3>content:</h3>
            <p>{animeWrap.content}</p>
          </Card>
        );
      })}
    </div>
  );
};
