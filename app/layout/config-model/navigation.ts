import { navItem, navCollapseItem } from './nav-item';

export const NavigationItems: navCollapseItem[] = [
    {
        id: 0,
        name: 'PDF',
        children: [
            {
                id: 0,
                name: 'list',
                routeLink: '/pdf/list'
            },
            {
                id: 1,
                name: 'new',
                routeLink: '/pdf/new'
            }
        ]
    },
    {
        id: 1,
        name: 'Query',
        children: [
            {
                id: 0,
                name: 'list',
                routeLink: '/query/list'
            },
            {
                id: 1,
                name: 'new',
                routeLink: '/query/new'
            }
        ]
    }

];