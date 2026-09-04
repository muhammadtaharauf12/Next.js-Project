
import dns from "node:dns";
import { MongoClient } from "mongodb";
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { headers } from "next/headers";


dns.setServers(["1.1.1.1", "8.8.8.8"]);

const client = new MongoClient(process.env.MONGODB_URI!);

await client.connect();

const db = client.db();

export const auth = betterAuth({
  database: mongodbAdapter(db),

  emailAndPassword: {
    enabled: true,
  },
});

export async function getSession(){
  const result = await auth.api.getSession({
    headers:await headers()
  });
  return result;
}