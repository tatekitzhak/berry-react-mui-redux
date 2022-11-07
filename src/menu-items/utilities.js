import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchTopics } from '@/features/slices/topics/topicsSlice';
import { topicsSliceSelector } from '@/features/slices/topics/topicsSlice';
// import our subtopics selector
import { fetchSubtopics, subtopicsSelector } from '@/features/slices/subtopics/subtopicSlice';	

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
            url: '/explore/topics/util-typography',
            icon: icons.IconTypography,
            breadcrumbs: false
        },
        {
            id: 'util-color',
            title: 'Color',
            type: 'item',
            url: '/explore/topics/util-color',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
        {
            id: 'util-shadow',
            title: 'Shadow',
            type: 'item',
            url: '/explore/topics/util-shadow',
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
                    url: '/explore/topics/topics-1/tabler-icons',
                    breadcrumbs: false
                },
                {
                    id: 'material-icons',
                    title: 'Material Icons',
                    type: 'item',
                    url: '/explore/topics/topics-1/material-icons',
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
                    url: '/explore/topics/topics-2/tabler-icons',
                    breadcrumbs: false
                },
                {
                    id: 'material-icons',
                    title: 'Material Icons',
                    type: 'item',
                    url: '/explore/topics/topics-2/material-icons',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //
function Utilities(){
    const [topics, setTopics] = useState({});
    const dispatch = useDispatch()
     // // data fetch

     const { subtopics, recipes, loading, hasErrors } = useSelector(subtopicsSelector)
     console.log('Utilities subtopics: ', subtopics, recipes, loading, hasErrors );

     const data = useSelector((state) => state);
     console.log('Utilities useSelector:', data)

     /*
     const data = useSelector(topicsSliceSelector);
     console.log('Utilities useSelector:', data)
     */
   
    useEffect(() => {
        dispatch( fetchTopics() );
        dispatch( fetchSubtopics() );
        setTopics(utilitiesTopics)
      },[dispatch]);
      
    
    return topics;
}


export default Utilities;