const routes = {
	home: {
		path: "/",
	},

	api: {
		ping: "/ping",
	},
};

export const authRoutes = [];
export const protectedRoutes = [];
export const publicRoutes = [routes.home.path];

export default routes;
