// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
    id: 'topics',
    title: 'Topics',
    type: 'group',
    children: [
        {
            id: 'util-typography',
            title: 'Typography',
            type: 'item',
            url: '/utils/util-typography',
            icon: icons.IconTypography,
            breadcrumbs: true
        },
        {
            id: 'util-color',
            title: 'Color',
            type: 'item',
            url: '/utils/util-color',
            icon: icons.IconPalette,
            breadcrumbs: true
        },
        {
            id: 'util-shadow',
            title: 'Shadow',
            type: 'item',
            url: '/utils/util-shadow',
            icon: icons.IconShadow,
            breadcrumbs: true
        },
        {
            id: 'icons-1',
            title: 'Icons-1',
            type: 'collapse',
            icon: icons.IconWindmill,
            url: '/icons-1',
            children: [
                {
                    id: 'tabler-icons',
                    title: 'Tabler Icons',
                    type: 'item',
                    icon: icons.IconWindmill,
                    url: '/icons/tabler-icons',
                    breadcrumbs: true
                },
                {
                    id: 'material-icons',
                    title: 'Material Icons',
                    type: 'item',
                    icon: icons.IconWindmill,
                    url: '/icons/material-icons',
                    breadcrumbs: true
                }
            ]
        },
        {
            id: 'icons-2',
            title: 'Icons-2',
            type: 'collapse',
            icon: icons.IconWindmill,
            url: '/icons-2',
            children: [
                {
                    id: 'tabler-icons',
                    title: 'Tabler Icons',
                    type: 'item',
                    icon: icons.IconWindmill,
                    url: '/icons/tabler-icons',
                    breadcrumbs: true
                },
                {
                    id: 'material-icons',
                    title: 'Material Icons',
                    type: 'item',
                    icon: icons.IconWindmill,
                    url: '/icons/material-icons',
                    breadcrumbs: true
                }
            ]
        }
    ]
};

export default utilities;
