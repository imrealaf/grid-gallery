import * as collections from "../constants/dbCollections";
import { db } from "./firebase";

/*
  Images API
*/

// Get user images by id
export const getUserImages = (id: string) =>
  db
    .collection(collections.IMAGES)
    .orderBy("created", "desc")
    .get();

/*
  Pofile API
*/

// Get user profile by id
export const getUserProfile = (id: string) =>
  db
    .collection(collections.PROFILES)
    .where("userId", "==", id)
    .get();
