import { selector } from "recoil";
import { jobState } from "../atoms/job";
import { JobInfo } from "@models/job";
import { storage } from "@utils/index";

export const jobSelect = selector({
  key: "jobSel",
  get: ({ get }) => {
    let jobInfo = get(jobState);
    if (jobInfo.id === 0) {
      try {
        jobInfo = storage.get("jobInfo") || jobInfo;
      } catch (error) {
        jobInfo = jobInfo;
      }
    }
    return jobInfo;
  },
  set: ({ set }, newVal: JobInfo) => {
    set(jobState, newVal);
    storage.set("jobInfo", newVal);
  },
});
