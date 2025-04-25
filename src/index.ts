function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

export function readingTime(content: string, options?: { isHtml?: boolean, wpm?: number }) {
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

