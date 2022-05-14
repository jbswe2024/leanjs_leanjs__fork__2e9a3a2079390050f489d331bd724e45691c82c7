import type { NextPage } from "next";
import { Host } from "@leanjs/next";

import { createRuntime, HostProvider } from "../libs/runtime";

const runtime = createRuntime();

const Home: NextPage = () => {
  return (
    <>
      <h1>Nextjs Host</h1>
      <HostProvider runtime={runtime}>
        <Host
          remote={{ packageName: "@leanjs/e2e-test-subjects-remote-react-1" }}
        />
        <hr />
        <Host
          remote={{ packageName: "@leanjs/e2e-test-subjects-remote-react-2" }}
        />
      </HostProvider>
    </>
  );
};

export default Home;
