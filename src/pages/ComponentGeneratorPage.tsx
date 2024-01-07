import React from 'react';

import Button from '../components/Button';
import ComponentGenerator from '../components/ComponentGenerator';
import Hero from '../components/Hero';
import ItemsShowcase from '../components/ItemsShowcase';
import ComponentObject from '../models/ComponentObject';
import SectionObject from '../models/SectionObject';

const ComponentGeneratorPage: React.FC = () => {
    const renderComponent = (component: ComponentObject): React.ReactNode => {
        const { type, props } = component;
        const childrenNode =
            'children' in props ? (props.children as React.ReactNode) : <> </>;
        switch (type) {
            case 'button':
                return <Button {...props}>{childrenNode}</Button>;
            case 'itemsshowcase':
                return <ItemsShowcase items={[]} {...props} />;
            case 'hero':
                return <Hero title={''} image={''} {...props} />;
            default:
                return <></>;
        }
    };

    const componentList: Array<SectionObject> = [
        {
            type: 'layoutSection',
            props: {
                border: '1px solid black',
            },
            components: [
                {
                    type: 'button',
                    props: {
                        children: <div>THIS IS A BUTTON</div>,
                        onClick: () => alert('BUTTON CLICKED'),
                    },
                },
                {
                    type: 'hero',
                    props: {
                        title: 'HERO COMPONENT',
                        image: 'https://bd.gaadicdn.com/processedimages/hero-motocorp/hero-motocorp-splendor/source/hero-motocorp-splendor6594efca3fa93.jpg',
                    },
                },
                {
                    type: 'itemsshowcase',
                    props: {
                        items: [
                            {
                                title: 'ITEMS SHOWCASE',
                                description:
                                    'THIS IS A SOME DESCRIPTION FOR COMPONENT',
                            },
                            {
                                title: 'ITEMS SHOWCASE',
                                description:
                                    'THIS IS A SOME DESCRIPTION FOR COMPONENT',
                            },
                        ],
                    },
                },
            ],
        },
    ];

    return (
        <ComponentGenerator
            componentList={componentList}
            renderComponent={renderComponent}
        />
    );
};

export default ComponentGeneratorPage;
