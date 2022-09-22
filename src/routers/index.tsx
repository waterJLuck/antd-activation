import { useRoutes } from "react-router-dom";

// * 导入所有router
const metaRouters:any= import.meta.globEager("./modules/*.tsx");

// * 处理路由
export const routerArray:any= [];
Object.keys(metaRouters).forEach(item => {
	Object.keys(metaRouters[item]).forEach((key: any) => {
		routerArray.push(...metaRouters[item][key]);
	});
});

export const rootRouter = [

	...routerArray,

];

const Router = () => {
	const routes = useRoutes(rootRouter);
	return routes;
};

export default Router;
