import { readingTime } from "reading-time-calc";

const plainText = "This is a simple example to estimate reading time.";
const htmlText = "<p>This is <strong>HTML</strong> content.</p>";

console.log(readingTime(plainText));
// { text: '1 min read', minutes: 0.3, time: 1, words: 9 }

console.log(readingTime(htmlText, { isHtml: true }));
// { text: '1 min read', minutes: 0.3, time: 1, words: 5 }
