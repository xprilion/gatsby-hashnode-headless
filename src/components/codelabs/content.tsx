// components/Content.tsx
import React from 'react';
import {Section} from "../../utils/codelabs";

type ContentProps = {
    sections: Section[];
    activeSectionId: string;
    onNavigateSection: (direction: 'prev' | 'next') => void;
    upperContent?: any;
    bottomContent: any;
};

const Content: React.FC<ContentProps> = ({ sections, activeSectionId, onNavigateSection, upperContent, bottomContent }) => {
    const activeSectionIndex = sections.findIndex(section => section.id === activeSectionId);

    return (
        <main className="bg-gray-50 flex-1 p-1 md:p-5 pt-0 w-full">
            <div className="w-full">
                {sections.map((section) => {
                    if (section.id === activeSectionId) {
                        return (
                            <>
                                <div key={section.id} className="bg-white shadow-lg rounded p-6 mb-4 w-full min-h-[500px]">
                                    <div className={"flex flex-row align-middle justify-between"}>
                                        <h2 className="m-0 mb-4">{section.title}</h2>
                                        <div className="text-right text-sm text-gray-500">{section.duration} mins</div>
                                    </div>
                                    <div className="content-section">{section.content}</div>
                                </div>
                                <div className="flex justify-between mt-4">
                                    {activeSectionIndex > 0 ? (
                                        <button
                                            onClick={() => onNavigateSection('prev')}
                                            className="bg-gray-700 text-white px-4 py-2 rounded shadow hover:bg-gray-900"
                                        >
                                            Previous
                                        </button>
                                    ) : <>&nbsp;</>}
                                    {activeSectionIndex < sections.length - 1 && (
                                        <button
                                            onClick={() => onNavigateSection('next')}
                                            className="bg-gray-700 text-white px-4 py-2 rounded shadow hover:bg-gray-900"
                                        >
                                            Next
                                        </button>
                                    )}
                                </div>
                            </>
                        );
                    }
                })}
                {bottomContent}
            </div>

        </main>
    );
};

export default Content;
