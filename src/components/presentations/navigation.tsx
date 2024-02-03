import React, { useState } from 'react';
import { Section } from '../../utils/codelabs';

type NavigationProps = {
    sections: Section[];
    activeSectionId: string;
    onSetActiveSectionId: (id: string) => void;
};

const Navigation: React.FC<NavigationProps> = ({ sections, activeSectionId, onSetActiveSectionId }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const activeSectionIndex = sections.findIndex(section => section.id === activeSectionId);
    const activeSection = sections.find(section => section.id === activeSectionId);


    return (
        <aside className={"mb-4 md:mb-0"}>
            {/* Dropdown for small screens */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex justify-between items-center px-4 py-2 font-medium text-left w-full bg-gray-100 rounded-md"
                >
                    <span>{activeSection ? activeSection.title : 'Select a Section'}</span>
                    <span className={`transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {isDropdownOpen && (
                    <ul className="list-none p-0 mt-2 bg-gray-100 rounded-md">
                        {sections.map((section, index) => (
                            <li key={section.id} className="rounded-md">
                                <button
                                    onClick={() => {
                                        onSetActiveSectionId(section.id);
                                        setIsDropdownOpen(false);
                                    }}
                                    className={`block text-left w-full px-3 py-2 font-medium truncate rounded-md transition-colors ${activeSectionId === section.id ? 'bg-black text-white' : 'hover:bg-gray-50'}`}
                                >
                                    {index + 1}. {section.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Regular sidebar for medium and larger screens */}
            <div className="hidden md:block lg:w-72 bg-gray-100 p-4 overflow-y-auto">
                <ul className="list-none p-0">
                    {sections.map((section, index) => (
                        <li key={section.id} className="rounded-md">
                            <button
                                onClick={() => onSetActiveSectionId(section.id)}
                                className={`block text-left w-full px-3 py-2 font-medium rounded-md transition-colors ${activeSectionId === section.id ? 'bg-black text-white hover:bg-gray-800' : 'hover:bg-gray-300'} ${index < activeSectionIndex ? 'bg-gray-700 text-gray-300 hover:bg-gray-800' : ''}`}
                            >
                                {index + 1}. {section.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default Navigation;
