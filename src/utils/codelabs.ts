// utils/parseCodelab.ts
import parse from 'html-react-parser';
import React from 'react';
import { parse as parseHtml } from 'node-html-parser';

export interface Section {
    id: string;
    title: string;
    content: React.ReactNode;
    duration: number;
}

export const parseCodelabHtml = (html: string): Section[] => {
    const doc = parseHtml(html);
    const sections: Section[] = [];

    doc.querySelectorAll('h2').forEach((heading) => {
        let duration = 0;
        let contentNodes: string[] = [];

        // Iterate over sibling elements until the next heading
        let nextElement = heading.nextElementSibling;
        while (nextElement && !['H2'].includes(nextElement.tagName)) {
            if (nextElement.tagName === 'P' && nextElement.textContent.startsWith('Duration:')) {
                const durationMatch = nextElement.textContent.match(/Duration: (\d+)/);
                if (durationMatch) {
                    duration = parseInt(durationMatch[1], 10);
                }
            } else {
                // Accumulate content for html-react-parser
                contentNodes.push(nextElement.toString());
            }
            nextElement = nextElement.nextElementSibling;
        }

        const contentHtml = contentNodes.join('');
        const content = parse(contentHtml);

        sections.push({
            id: heading.id,
            title: heading.text,
            content: content,
            duration: duration,
        });
    });

    return sections;
};
