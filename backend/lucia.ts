import { lucia } from "lucia";
import { express } from "lucia/middleware";
import { mysql2 } from '@lucia-auth/adapter-mysql';
import mysql from 'mysql2/promise';

import { github, google } from '@lucia-auth/oauth/providers';

const connectionPool = mysql.createPool({});

export const auth = lucia({
  adapter: mysql2(connectionPool, {
    user: "auth_user",
    key: "user_key",
    session: "user_session",
  }),
  env: process.env.NODE_ENV === "development" ? "DEV" : "PROD",
  middleware: express(),

  getUserAttributes: (data) => {
    return {
      githubUsername: data.username
    };
  }
});

export const githubAuth = github(auth, {
  clientId: process.env.GITHUB_CLIENT_ID ?? "",
  clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
});

export const googleAuth = google(auth, {
  // TODO: add google client id and secret
})

export type Auth = typeof auth;
