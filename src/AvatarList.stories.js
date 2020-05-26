import React from "react";

import { AvatarList } from "./AvatarList";

export const users = [
  {
    id: "1",
    name: "Dominic Nguyen",
    avatarUrl: "https://www.google.com",
  },
  {
    id: "2",
    name: "Tom Coleman",
    avatarUrl: "https://www.amazon.com",
  },
  {
    id: "3",
    name: "Zoltan Olah",
    avatarUrl: "https://www.facebook.com",
  },
  {
    id: "4",
    name: "Tim Hingston",
    avatarUrl: "https://www.instagram.com",
  },
];

export default {
  title: "Design System|AvatarList",
  component: AvatarList,
  excludeStories: ["users"],
};

export const short = () => <AvatarList users={users.slice(0, 2)} />;
export const smallSize = () => (
  <AvatarList users={users.slice(0, 2)} size="small" />
);
export const loading = () => <AvatarList loading />;
export const ellipsized = () => <AvatarList users={users} />;
export const bigUserCount = () => <AvatarList users={users} userCount={100} />;
export const empty = () => <AvatarList users={[]} />;
