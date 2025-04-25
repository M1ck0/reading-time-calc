# reading-time-calc

> Lightweight utility to estimate reading time from raw text or HTML

## Installation

```bash
npm install reading-time-calc
```

## Basic Usage (Text Input)

```js
import { readingTime } from 'reading-time-calc';

const text = "This is a short example to calculate reading time.";

const result = readingTime(text);

console.log(result);
// Output:
// {
//   text: '1 min read',
//   minutes: 0.3,
//   time: 1,
//   words: 9
// }
```

## HTML Input
If your content is in HTML format, pass the isHtml option:

```js
const html = "<p>This is <strong>HTML</strong> content with <a href='#'>tags</a>.</p>";

const result = readingTime(html, { isHtml: true });

console.log(result);
// Output:
// {
//   text: '1 min read',
//   minutes: 0.3,
//   time: 1,
//   words: 7
// }
```

### Custom Reading Speed
You can change the reading speed using the wpm (words per minute) option:

```js
const fastReader = readingTime("Speedy reader text", { wpm: 300 });

console.log(fastReader);
// Output:
// {
//   text: '1 min read',
//   minutes: 0.1,
//   time: 1,
//   words: 3
// }
```
