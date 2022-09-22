import React from "react";
import lazyLoad from "../utils/lazyLoad";
import { LayoutIndex } from "../constant";
// 审核模块
const pageRouter= [
	{
		element: <LayoutIndex />,
		meta: {
			title: "首页"
		},
		children: [
			{
				path: "/page1",
				element: lazyLoad(React.lazy(() => import("../../view/page1"))),
				
			},
			{
				path: "/page2",
				element: lazyLoad(React.lazy(() => import("../../view/page2"))),
			
			},
		]
	}
];

export default pageRouter;
