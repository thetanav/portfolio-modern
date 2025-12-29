"use client";

import GitHubButton from "react-github-btn";

export default function Star() {
  return (
    <GitHubButton
      href="https://github.com/thetanav/portfolio-modern"
      data-color-scheme="no-preference: light; light: light; dark: dark;"
      data-size="large"
      data-show-count="true"
      aria-label="Star thetanav/portfolio-modern on GitHub">
      Star
    </GitHubButton>
  );
}
