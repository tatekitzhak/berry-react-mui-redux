import * as React from 'react';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};

const utilitiesTopics = {
    id: 'topics',
    title: 'Topics',
    type: 'group',
    children: [
        {
            id: 'util-typography',
            title: 'Typography',
            type: 'item',
            url: '/topics/util-typography',
            icon: icons.IconTypography,
            breadcrumbs: false
        },
        {
            id: 'util-color',
            title: 'Color',
            type: 'item',
            url: '/topics/util-color',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
        {
            id: 'util-shadow',
            title: 'Shadow',
            type: 'item',
            url: '/topics/util-shadow',
            icon: icons.IconShadow,
            breadcrumbs: false
        },
        {
            id: 'topics-1',
            title: 'Topics-1',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'tabler-icons',
                    title: 'Tabler Icons',
                    type: 'item',
                    url: '/topics/topics-1/tabler-icons',
                    breadcrumbs: false
                },
                {
                    id: 'material-icons',
                    title: 'Material Icons',
                    type: 'item',
                    url: '/topics/topics-1/material-icons',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'topics-2',
            title: 'Topics-2',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'tabler-icons',
                    title: 'Tabler Icons',
                    type: 'item',
                    url: '/topics/topics-2/tabler-icons',
                    breadcrumbs: false
                },
                {
                    id: 'material-icons',
                    title: 'Material Icons',
                    type: 'item',
                    url: '/topics/topics-2/material-icons',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //
function Utilities(){
    // const [utilities1, setUtilities] = useState();
    // const [topics, setTopics] = React.useState({});
    // const dispatch = useDispatch()

    // // data fetch
    // const topics = useSelector((state) => state.topicsSlice);
    // useEffect(() => {
    //     setTopics(utilitiesTopics)
    //   });

    
    return utilitiesTopics;
}


export default Utilities;
