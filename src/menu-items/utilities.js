import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchTopics } from '@/features/slices/topics/topicsSlice';
import { selectTopics } from '@/features/slices/topics/topicsSlice';
// import our subtopics selector
import { fetchSubtopics, selectSubtopics, selectMemoizedSubtopics } from '@/features/slices/subtopics/subtopicSlice';	

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
    const [topicsMenu, setTopicsMenu] = useState({});
    const dispatch = useDispatch()

     // Select datas
     const subtopics = useSelector( selectMemoizedSubtopics ) // selectSubtopics
     console.log('Utilities subtopics: ', subtopics );

     const topics = useSelector(selectTopics);
     // console.log('Utilities topics:', topics)

    useEffect(() => {
        dispatch( fetchTopics() );
        dispatch( fetchSubtopics() );
        setTopicsMenu(utilitiesTopics)
      },[dispatch]);
      
    
    return topicsMenu;
}


export default Utilities;

/**
 
const utilitiesTopics = {
    id: 'topics',
    title: 'Topics',
    type: 'group',
}
 
for(let i=1; i<=3; i++){
    let topic = {};
    let subtopics = [];

    for(let j=1; j<=4; j++){
      let subtopicItems = {};
      subtopicItems.id = `subtopic-${j}`;
      subtopicItems.title = 'subtopic';
      subtopicItems.type = 'item';
      subtopicItems.url = '/explore/topics/util-typography';
      subtopicItems.icon = 'IconTypography';
      subtopicItems.breadcrumbs = false;
      subtopics.push(subtopicItems)
        
        let articles = [];
        for(k=1; k<=5; k++){
            let articleItems = {};
            articleItems.id = `article-${k}`;
            articleItems.title = 'article';
            articleItems.type = 'item';
            articleItems.url = '/explore/topics/topics-2/tabler-icons';
            articleItems.breadcrumbs = false;
            articles.push(articleItems)
        }
        subtopicItems.children = articles;
    }
    topic.children = subtopics;
    utilitiesTopics['children'] = topic.children
    console.log('utilitiesTopics:',utilitiesTopics)
}

 */