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

const utilitiesCategories = {
    id: 'categories',
    title: 'Categories',
    type: 'group',
    children: [
        {
            id: 'util-typography',
            title: 'Typography',
            type: 'item',
            url: '/explore/categories/util-typography',
            icon: icons.IconTypography,
            breadcrumbs: false
        },
        {
            id: 'util-color',
            title: 'Color',
            type: 'item',
            url: '/explore/categories/util-color',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
        {
            id: 'util-shadow',
            title: 'Shadow',
            type: 'item',
            url: '/explore/categories/util-shadow',
            icon: icons.IconShadow,
            breadcrumbs: false
        },
        {
            id: 'categories-1',
            title: 'Categories-1',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'tabler-icons',
                    title: 'subcategory 1',
                    type: 'item',
                    url: '/explore/categories/categories-1/tabler-icons',
                    breadcrumbs: false
                },
                {
                    id: 'material-icons',
                    title: 'subcategory 2',
                    type: 'item',
                    url: '/explore/categories/categories-1/material-icons',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'categories-2',
            title: 'Categories-2',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'tabler-icons',
                    title: 'subcategory 1',
                    type: 'item',
                    url: '/explore/categories/categories-2/tabler-icons',
                    breadcrumbs: false
                },
                {
                    id: 'material-icons',
                    title: 'subcategory 2',
                    type: 'item',
                    url: '/explore/categories/categories-2/material-icons',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //
function Utilities(){
    const [categoriesMenu, setCategoriesMenu] = useState({});
    const dispatch = useDispatch()

     // Select datas
     const subcategories = useSelector( selectMemoizedSubtopics ) // selectSubtopics
     console.log('Utilities subtopics: ', subcategories );

     const categories = useSelector(selectTopics);
     console.log('Utilities topics:', categories)

    useEffect(() => {
        dispatch( fetchTopics() );
        dispatch( fetchSubtopics() );
        setCategoriesMenu(utilitiesCategories)
      },[dispatch]);
      
    
    return categoriesMenu;
}


export default Utilities;

 
const utilitiesCategories1 = {
    id: 'categories',
    title: 'Categories',
    type: 'group',
}
 
for(let i=1; i<=3; i++){
    let category = {};
    let categories = [];

    for(let j=1; j<=4; j++){
      let categoryItem = {};
      categoryItem.id = `category-${j}`;
      categoryItem.title = `category-${j}`;
      categoryItem.type = 'item';
      categoryItem.url = '/explore/categories/util-typography';
      categoryItem.icon = 'IconTypography';
      categoryItem.breadcrumbs = false;
      categories.push(categoryItem)
        
        let subcategories = [];
        for(let k=1; k<=5; k++){
            let subcategoryItem = {};
            subcategoryItem.id = `subcategory-${k}`;
            subcategoryItem.title = `subcategory-${k}`;
            subcategoryItem.type = 'item';
            subcategoryItem.url = '/explore/categories/categories-2/tabler-icons';
            subcategoryItem.breadcrumbs = false;
            subcategories.push(subcategoryItem)
        }
        categoryItem.children = subcategories;
    }
    category.children = categories;
    utilitiesCategories1['children'] = category.children
    console.log('utilitiesCategories::',utilitiesCategories1)
}


