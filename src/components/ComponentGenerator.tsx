import React from 'react';

interface SectionObject {
    type: string;
    props: object;
    components: ComponentObject[];
}

interface ComponentObject {
    type: string;
    props: object;
}

interface ComponentGeneratorProps {
    componentList: SectionObject[];
    renderComponent: (component: ComponentObject) => React.ReactNode;
}

const ComponentGenerator: React.FC<ComponentGeneratorProps> = ({
    componentList,
    renderComponent,
}: ComponentGeneratorProps) => {
    const renderSection = (section: SectionObject): React.ReactNode => {
        const { type, components, props } = section;

        return (
            <div key={type} style={props}>
                {components.map((cmp, idx) => (
                    <div key={idx}>{renderComponent(cmp)}</div>
                ))}
            </div>
        );
    };

    return (
        <div>
            {componentList.map((section, index) => (
                <div key={index}>{renderSection(section)}</div>
            ))}
        </div>
    );
};

export default ComponentGenerator;
