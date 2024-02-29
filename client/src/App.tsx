import "./styles/App.css";
import { FC, Suspense } from "react";
// React Router
// A library for routing in React
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
// React MUI
// A library for Material-UI in React
import { createTheme, ThemeProvider } from "@mui/material/styles";

const App: FC = () => {
	const theme = createTheme({
		palette: {
			mode: "dark",
		},
	});
	return (
		<ThemeProvider theme={theme}>
			<Suspense fallback={<div>Loading...</div>}>
				<RouterProvider router={routes} />
			</Suspense>
		</ThemeProvider>
	);
};

export default App;
