"use client";

import React, { useEffect } from "react";
import { atom, useAtom } from "jotai";
import { Octokit } from "octokit";

import PrCard from "../components/ui/PrCard";
import samplePRs from "./samplePRs.json";

const prResult = atom(samplePRs);

export default function OpenPRsPage() {
  const [prResultValue, setPrResultValue] = useAtom(prResult);

  // const getPrResult = async () => {
  //   const octokit = new Octokit({ auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN });
  //   const response = await octokit.request(
  //     "GET /repos/chingu-voyages/v57-tier3-team-39/pulls/",
  //     {
  //       // org: import.meta.env.VITE_GITHUB_ORG,
  //       // team_slug: import.meta.env.VITE_GITHUB_REPO_NAME,
  //       headers: {
  //         "X-GitHub-Api-Version": "2022-11-28",
  //       },
  //     }
  //   );
  //   console.log(JSON.stringify(response.data, null, 2));
  //   return response.data;
  // };

  // const handleGetPrResult = async (e?: React.SyntheticEvent) => {
  //   if (e?.preventDefault) e.preventDefault();
  //   const prResult = await getPrResult();
  //   setPrResultValue(prResult);
  // };

  // useEffect(() => {
  //   // call once on mount
  //   handleGetPrResult();
  // }, []);

  return (
    <div>
      <h1>PRs Display</h1>
      {prResultValue.map((pr) => {
        return (
          <PrCard
            key={pr.id}
            title={pr.title}
            prNumber={pr.number}
            statusIcon={<span>✅</span>}
            login={pr.user.login}
            createdAt={new Date(pr.created_at).toLocaleDateString()}
            lastComment={pr.user.login}
            // requested_reviewers={pr.requested_reviewers
            //   .map((r) => r.login)
            //   .join(", ")}
          />
        );
      })}
    </div>
  );
}
