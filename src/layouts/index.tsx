import { useLocation, useOutlet } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import KeepAlive from "react-activation";


const LayoutIndex = (props: any) => {
	const outlet = useOutlet();
	const { pathname, key } = useLocation();
	

	return (
		<div className="container">
			我是layout
					{/* <TransitionGroup component={null}>
						<CSSTransition key={pathname} timeout={300} classNames="fade" exit={false} appear> */}
							<div className="g-container">
								<KeepAlive key={key} cacheKey={pathname} id={key}>
									{outlet}
								</KeepAlive>
							</div>
						{/* </CSSTransition>
					</TransitionGroup> */}
				
		</div>
	);
};

export default LayoutIndex;

