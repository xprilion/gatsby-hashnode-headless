import React, {useCallback, useState} from 'react';
import {Section} from "../../utils/codelabs";
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import { useHotkeys } from 'react-hotkeys-hook';



type ContentProps = {
    sections: Section[];
    activeSectionId: string;
    onNavigateSection: (direction: 'prev' | 'next') => void;
    upperContent?: any;
    bottomContent: any;
};

const Content: React.FC<ContentProps> = ({ sections, activeSectionId, onNavigateSection, upperContent, bottomContent }) => {
    const activeSectionIndex = sections.findIndex(section => section.id === activeSectionId);
    const viewChangeHandle = useFullScreenHandle();
    const [isFullScreen, setFullScreen] = useState(false);
    
    const handleViewChange = useCallback((state: any, handle: any) => {
        setFullScreen(state);
    }, [viewChangeHandle]);
    
    useHotkeys('ArrowRight', () => onNavigateSection('next'));
    useHotkeys('Space', () => onNavigateSection('next'));
    useHotkeys('Enter', () => onNavigateSection('next'));
    
    useHotkeys('ArrowLeft', () => onNavigateSection('prev'));
    
    
    return (
        
        <main className="bg-gray-50 flex-1 p-1 md:p-5 pt-0 w-full">
            <FullScreen handle={viewChangeHandle} onChange={handleViewChange}>
            <div className="w-full">
                {sections.map((section) => {
                    if (section.id === activeSectionId) {
                        return (
                            <>
                                <div key={section.id}
                                     className={`bg-white shadow-lg rounded p-6 mb-4 w-full min-h-[500px] overflow-y-scroll ${isFullScreen ? 'h-screen' : 'max-h-[500px]'}`}>
                                    <div className={"flex flex-row align-middle justify-between"}>
                                        <h2 className="m-0 mb-4">{section.title}</h2>
                                        <div className="text-right text-sm text-gray-500">{section.duration} mins
                                        </div>
                                    </div>
                                    <div className="content-section">{section.content}</div>
                                </div>
                                <div className="flex justify-between mt-4">
                                    <button onClick={viewChangeHandle.enter}>
                                        Enter fullscreen
                                    </button>
                                    <div
                                        className={`${isFullScreen ? 'fixed bottom-0 right-0 z-[99999] p-2' : ''}`}>
                                        <button
                                            onClick={() => onNavigateSection('prev')}
                                            className={`px-2 py-1 mr-2 text-sm rounded shadow ${activeSectionIndex > 0 ? 'bg-gray-700 text-white hover:bg-gray-900' : 'bg-gray-100'}`}
                                            disabled={activeSectionIndex === 0}
                                        >
                                            Previous
                                        </button>
                                        <button
                                            onClick={() => onNavigateSection('next')}
                                            className={`px-2 py-1 text-sm rounded shadow ${activeSectionIndex < sections.length - 1 ? 'bg-gray-700 text-white hover:bg-gray-900' : 'bg-gray-100'}`}
                                            disabled={activeSectionIndex === sections.length - 1}
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </>
                        );
                    }
                })}
                {bottomContent}
            </div>
            </FullScreen>
        </main>
    );
};

export default Content;
