import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AppKitProvider } from "./providers/index.tsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<AppKitProvider>
			<Toaster position="top-right" />
			<App />
		</AppKitProvider>
	</StrictMode>
);
