import React, {useEffect} from 'react';
import { parseCodelabHtml } from '../../utils/codelabs';
import Navigation from './navigation';
import Content from './content';
import Prism from 'prismjs';
import Header from "../header";
import Footer from "../footer";


type CodelabInterfaceProps = {
    htmlContent: string;
    upperContent: any;
    bottomContent: any;
};

const CodelabInterface: React.FC<CodelabInterfaceProps> = ({ htmlContent, upperContent, bottomContent }) => {
    const sections = parseCodelabHtml(htmlContent);
    const firstSectionId = sections.length > 0 ? sections[0].id : '';

    // Use state to manage the active section
    const [activeSectionId, setActiveSectionId] = React.useState<string>(firstSectionId);

    // Function to navigate to the previous or next section
    const navigateSection = (direction: 'prev' | 'next') => {
        const currentSectionIndex = sections.findIndex((section) => section.id === activeSectionId);
        const newSectionIndex = direction === 'prev' ? currentSectionIndex - 1 : currentSectionIndex + 1;
        if (sections[newSectionIndex]) {
            setActiveSectionId(sections[newSectionIndex].id);
        }
    };

    useEffect(() => {
        Prism.highlightAll();
    }, [activeSectionId]);

    return (
        <>
            <div className="flex flex-col md:flex-row w-full">
                <Navigation
                    sections={sections}
                    activeSectionId={activeSectionId}
                    onSetActiveSectionId={setActiveSectionId}
                />
                <div className="flex flex-col h-screen mx-auto w-full">
                    <div className={"max-w-[800px]"}>
                        <Content
                            sections={sections}
                            activeSectionId={activeSectionId}
                            onNavigateSection={navigateSection}
                            bottomContent={bottomContent}
                        />
                        <br/>
                        <hr className={"hr-full"}/>
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CodelabInterface;
