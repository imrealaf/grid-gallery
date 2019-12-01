import * as collections from "../constants/dbCollections";
import { db } from "./firebase";

/*
  Images API
*/
export const getUserImages = (id: string) =>
  db
    .collection(collections.IMAGES)
    .orderBy("created", "desc")
    .get();

export const getUserProfile = (id: string) =>
  db
    .collection(collections.PROFILES)
    .where("userId", "==", id)
    .get();
