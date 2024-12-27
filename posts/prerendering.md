---
title: 'markdown site checker'
date: '2024-12-27'
discription: 'Checks all markdown rendering in next js.'
---

```javascript
function getPostContent(slug) {
  const folder = 'posts/';
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');

  const matterResult = matter(content);
  return matterResult;
}```