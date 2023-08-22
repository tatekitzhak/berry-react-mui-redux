// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    title: 'Services',
    caption: 'Services Caption',
    type: 'group',
    children: [
        {
            id: 'authentication',
            title: 'Authentication',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'login3',
                    title: 'Login',
                    type: 'item',
                    url: '/services/login/login3',
                    target: true
                },
                {
                    id: 'register3',
                    title: 'Register',
                    type: 'item',
                    url: '/services/register/register3',
                    target: true
                }
            ]
        },
        {
            id: 'ai-tools',
            title: 'AI Tools',
            type: 'collapse',
            icon: icons.IconKey,

            children: [
                {
                    id: 'ai-tools',
                    title: 'Ask chat GPT',
                    type: 'item',
                    url: '/services/ask-chatgpt',
                    target: true
                },
                {
                    id: 'ask-dall-e-2',
                    title: 'Ask DALL·E 2',
                    type: 'item',
                    url: '/services/ask-dall-e-2',
                    target: true
                }
            ]
        }
    ]
};

export default pages;
