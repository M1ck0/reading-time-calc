"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readingTime = readingTime;
function stripHtml(html) {
    return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}
function readingTime(content, options) {
    const { isHtml = false, wpm = 200 } = options || {};
    const text = isHtml ? stripHtml(content) : content;
    const words = text.split(/\s+/).filter(Boolean);
    const wordCount = words.length;
    const minutes = wordCount / wpm;
    const time = Math.ceil(minutes);
    return {
        text: `${time} min read`,
        minutes,
        time,
        words: wordCount
    };
}
