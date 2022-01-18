import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

export async function connectDatabase() {
  const client = await MongoClient.connect(process.env.DATABASE);
  return client;
}
export async function connectPortalDatabase() {
  const client = await MongoClient.connect(process.env.PORTALDATABASE);
  return client;
}

export async function getDocuments(client, collection, sort) {
  const db = client.db();
  const documents = await db.collection(collection).find().sort(sort).toArray();
  return documents;
}

export async function postDocuments(client, collection, item) {
  const db = client.db();
  const includes = await db
    .collection(collection)
    .find({ email: item.email })
    .toArray();
  if ((await includes.length) > 0) {
    throw Error("Email is invalid or has already been activated...");
  } else {
    await db.collection(collection).insertOne(item);
    return item;
  }
}
