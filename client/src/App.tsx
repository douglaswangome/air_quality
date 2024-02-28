import { FC, Suspense } from "react";
// React Router
// A library for routing in React
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

const App: FC = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<RouterProvider router={routes} />
		</Suspense>
	);
};

export default App;
