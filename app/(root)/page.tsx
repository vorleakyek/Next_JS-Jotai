'use client'; 
import { Button } from '@mantine/core';
import { atom, useAtom } from 'jotai'; 
import { Octokit } from "octokit";


const prResult = atom("");

export default function Home() {
  const [prResultValue, setPrResultValue] = useAtom(prResult);

  const handleClick = async (e) => {
    e.preventDefault(); 
    const prResult = await getPrResult();
    setPrResultValue(prResult);  
  };

  const getPrResult = async () => {
    const octokit = new Octokit({ auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN });
    const response = await octokit.request("GET /repos/chingu-voyages/v57-tier3-team-39",
      {
        // org: import.meta.env.VITE_GITHUB_ORG,
        // team_slug: import.meta.env.VITE_GITHUB_REPO_NAME,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );
    return response.data;
  };

  return (
    <div >
      <Button onClick={handleClick}>Click me</Button>
      {prResultValue && <pre>{JSON.stringify(prResultValue, null, 2)}</pre>}
    </div>
  );
}


