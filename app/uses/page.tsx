import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uses',
  description:
    "Here's what tech I'm currently using for coding, videos, and music.",
};

export default function UsesPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-8">
        here's my setup 🔥
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <h3 id="computer-office">Computer / Office</h3>
        <ul className="text-neutral-300">
          <li>16&quot; Lenovo Ideapad Gaming RTX3050</li>
        </ul>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <h3 id="coding">Coding</h3>
        <ul className="text-neutral-300">
          <li>
            Editor: VSCode 
          </li>
          <li>Theme: One Dark Pro</li>
          <li>Terminal: bash / zsh</li>
        </ul>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <h3 id="software">Software</h3>
        <ul className="text-neutral-300">
          <li>1Password</li>
          <li>Spotify</li>
          <li>WSL</li>
          <li>Photoshop</li>
          <li>Notion</li>
          <li>Xbox</li>
          <li>OBS</li>
          <li>Android Studio</li>
        </ul>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <h3 id="other-tech">Other Tech</h3>
        <ul className="text-neutral-300">
          <li>nothing much ...</li>
        </ul>
      </div>
    </section>
  );
}
