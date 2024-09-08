import { TwitterApi } from "twitter-api-v2";
// By default, client are created with the max right-level (Read+Write+DMs)
const client = new TwitterApi('<YOUR-TWITTER-BEARER-TOKEN>');

// Read+Write level
export const rwClient = client.readWrite;

// Read-only level
const roClient = client.readOnly;