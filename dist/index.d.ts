export declare function readingTime(content: string, options?: {
    isHtml?: boolean;
    wpm?: number;
}): {
    text: string;
    minutes: number;
    time: number;
    words: number;
};
