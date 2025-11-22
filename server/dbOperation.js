 // dbOperation.js
import { MongoClient } from "mongodb";

const uri =
  "mongodb://<USERNAME>:<PASSWORD>@<HOST>:<PORT> /SpotABotauthSource=admin";
const client = new MongoClient(uri);

export async function saveGameStats(stats) {
  try {
    await client.connect();
    const db = client.db("SpotABot");
    const collection = db.collection("gameStats");

    const aiWinRate =
      stats.totalGames > 0 ? stats.aiWins / stats.totalGames : 0;

    const record = {
      totalGames: stats.totalGames,
      totalGameTime: stats.totalGameTime,
      humanWins: stats.humanWins,
      aiWins: stats.aiWins,
      aiWinRate,
      createdAt: new Date(),
    };

    await collection.insertOne(record);
    console.log("Folder Saved to DB:", record);
  } catch (error) {
    console.error("MongoDB save error:", error);
  } finally {
    await client.close();
  }
}

export async function getLatestGameStats() {
  try {
    await client.connect();
    const db = client.db("SpotABot");
    const collection = db.collection("gameStats");

    const latest = await collection
      .find()
      .sort({ createdAt: -1 })
      .limit(1)
      .toArray();
    console.log("Latest record from DB:", latest);

    if (latest.length === 0) return null;

    const record = latest[0];
    const avgGameTime =
      record.totalGames > 0
        ? Math.round(record.totalGameTime / record.totalGames) + "s"
        : "0s";

    return {
      totalGames: record.totalGames,
      totalGameTime: record.totalGameTime,
      humanWins: record.humanWins,
      aiWins: record.aiWins,
      aiWinRate: (record.aiWinRate * 100).toFixed(2),
      avgGameTime,
    };
  } catch (error) {
    console.error("MongoDB fetch error:", error);
    return null;
  } finally {
    await client.close();
  }
}
