import * as React from 'react';
import Loadable from "react-loadable";


const Index = import('../container/index');//首页

interface RouteConfig {
	path: string,
	exact?: boolean,
	component: Object,
	onEnter?: any,
	title?: string
}


let routes: Array<RouteConfig> = [
	{
		path: '/',
		exact: true,
		title:'index',
		onEnter: function (nextState: any, replaceState: any){},
		component: Loadable({
			loader: () => Index,
			loading: () => <div>loading</div>
		}),
	}

];

export default routes;