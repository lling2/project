import { JobInfo } from "@models/job";

import { atom } from "recoil";

export const jobState = atom({
  key: "JobState",
  default: {
    id: 0,
  },
});
