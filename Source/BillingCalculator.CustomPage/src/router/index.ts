import {
	type RouteRecordRaw,
    createRouter,
    createWebHistory
} from 'vue-router';
import { BillingCalculator } from '../components';
import { ReviewTab } from '../components/Review';
import { RepositoryTab } from '../components/Repository';
import { ColdStorageTab } from '../components/ColdStorage';

const routes: RouteRecordRaw[] = [
	{ path: '/', redirect: '/billing-calculator' },
	{
		path: '/billing-calculator',
		name: 'Billing Calculator',
		component: BillingCalculator,
        children:[
            {
                path: '/billing-calculator/repository',
                name: 'Repository',
                component: RepositoryTab
            },
            {
                path: '/billing-calculator/review',
                name: 'Review',
                component: ReviewTab
            },
            {
                path: '/billing-calculator/cold-storage',
                name: 'Cold Storage',
                component: ColdStorageTab
            },
        ]
	},
];

const router = createRouter({
    routes,
    history: createWebHistory()
});
export default router;