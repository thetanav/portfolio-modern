import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uses',
  description:
    "Here's what tech I'm currently using for coding, videos, and music.",
};

export default function UsesPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        here's my setup
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <h3 id="computer-office">Computer / Office</h3>
        <ul>
          <li>16&quot; Lenovo Ideapad Gaming RTX3050</li>
        </ul>
        <h3 id="coding">Coding</h3>
        <ul>
          <li>
            Editor: VSCode 
          </li>
          <li>Theme: One Dark Pro</li>
          <li>Terminal: bash / zsh</li>
        </ul>
        <h3 id="software">Software</h3>
        <ul>
          <li>1Password</li>
          <li>Spotify</li>
          <li>WSL</li>
          <li>Photoshop</li>
          <li>Notion</li>
          <li>Xbox</li>
          <li>OBS</li>
          <li>Android Studio</li>
        </ul>
        <h3 id="other-tech">Other Tech</h3>
        <ul>
          <li>nothing much ...</li>
        </ul>
      </div>
    </section>
  );
}
