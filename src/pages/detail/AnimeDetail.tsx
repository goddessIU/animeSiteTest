import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  getAnimeDetailAsync,
  selectAnimeDetail,
} from "../../features/animeDetail/animeDetailSlice";

export const AnimeDetail = () => {
  const params = useParams();
  // console.log(params)
  const dispatch = useAppDispatch();
  
  const detailData = useAppSelector(selectAnimeDetail);

  useEffect(() => {
    dispatch(getAnimeDetailAsync(parseInt(params.animeId as string)));
  }, [])

  return ( (Object.keys(detailData).length > 0) ? <h1>{detailData["title_japanese"]}</h1> : <h1>wait a minute</h1>);
};
