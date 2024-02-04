import React, { lazy, Suspense } from "react";
import {
	Navigate,
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";

// LOADER COMPONENT
import Loader from "../components/Utilities/Loader";

import RootLayout from "./RootLayout";

// -----------------------------------------------------
// ****************LAZY IMPORTS *********************
// -----------------------------------------------------
const HomePage = lazy(() => import("../Pages/HomePage"));
const ProductDetail = lazy(
	() => import("../components/Products/ProductDetail"),
);
const ProductsCategory = lazy(
	() => import("../components/Products/ProductsCategory"),
);
const ProductsSubCategory = lazy(
	() => import("../components/Products/ProductsSubCategory"),
);
const NoPage = lazy(() => import("../Pages/NoPage"));
const Dashboard = lazy(() => import("../components/Dashboard/Dashboard"));
const AddProduct = lazy(() => import("../components/Dashboard/AddProduct"));
const SignUp = lazy(() => import("../components/Authentication/SignUp"));
const Login = lazy(() => import("../components/Authentication/Login"));
const Cart = lazy(() => import("../components/Cart/Cart"));
const CustomerService = lazy(() => import("../Pages/CustomerService"));
const Orders = lazy(() => import("../components/Orders/orders"));
const UserDetail = lazy(() => import("../components/UserDetail/UserDetail"));
const UpdateProduct = lazy(
	() => import("../components/Dashboard/UpdateProduct"),
);
const SearchProducts = lazy(
	() => import("../components/Products/SearchProducts"),
);

// -----------------------------------------------------
// *************** PROTECTED ROUTES *******************
// -----------------------------------------------------

// PROTECTED ROUTE FOR USER
// -----------------------------------------------------
const ProtectedRoute = ({ children }) => {
	const userLocal = localStorage.getItem("user");
	if (userLocal) {
		return children;
	} else {
		return <Navigate to={"/login"} />;
	}
};

// PROTECTED ROUTE FOR ADMIN DASHBOARD
// -----------------------------------------------------
const env = import.meta.env;
const adminEmail = env.VITE_REACT_APP_ADMIN_EMAIL;
const ProtectedRouteForAdmin = ({ children }) => {
	const userLocal = JSON.parse(localStorage.getItem("user"));

	if (userLocal && userLocal.user && userLocal.user.email === adminEmail) {
		return children;
	} else {
		return <Navigate to={"/login"} />;
	}
};
// -----------------------------------------------------

const routes = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route
				path="/"
				element={
					<Suspense fallback={<Loader />}>
						<RootLayout />
					</Suspense>
				}
			>
				<Route
					index
					element={
						<Suspense fallback={<Loader />}>
							<HomePage />
						</Suspense>
					}
				/>
				<Route
					path="/cart"
					element={
						<Suspense fallback={<Loader />}>
							<ProtectedRoute>
								<Cart />
							</ProtectedRoute>
						</Suspense>
					}
				/>
				<Route
					path="/productDetail/:productId"
					element={
						<Suspense fallback={<Loader />}>
							<ProductDetail />
						</Suspense>
					}
				/>
				<Route
					path="/ProductsCategory/:categoryName"
					element={
						<Suspense fallback={<Loader />}>
							<ProductsCategory />
						</Suspense>
					}
				/>
				<Route
					path="/ProductsSubCategory/:subCategoryName"
					element={
						<Suspense fallback={<Loader />}>
							<ProductsSubCategory />
						</Suspense>
					}
				/>
				<Route
					path="/customer_service"
					element={
						<Suspense fallback={<Loader />}>
							<CustomerService />
						</Suspense>
					}
				/>
				<Route
					path="/orders"
					element={
						<Suspense fallback={<Loader />}>
							<Orders />
						</Suspense>
					}
				/>
				<Route
					path="/user_detail"
					element={
						<Suspense fallback={<Loader />}>
							<ProtectedRoute>
								<UserDetail />
							</ProtectedRoute>
						</Suspense>
					}
				/>
				<Route
					path="/searchResults"
					element={
						<Suspense fallback={<Loader />}>
							<SearchProducts />
						</Suspense>
					}
				/>
			</Route>
			<Route
				path="/*"
				element={
					<Suspense fallback={<Loader />}>
						<NoPage />
					</Suspense>
				}
			/>
			<Route
				path="/dashboard"
				element={
					<Suspense fallback={<Loader />}>
						<ProtectedRouteForAdmin>
							<Dashboard />
						</ProtectedRouteForAdmin>
					</Suspense>
				}
			/>
			<Route
				path="/addProduct"
				element={
					<Suspense fallback={<Loader />}>
						<ProtectedRouteForAdmin>
							<AddProduct />
						</ProtectedRouteForAdmin>
					</Suspense>
				}
			/>
			<Route
				path="/updateProduct/:productId"
				element={
					<Suspense fallback={<Loader />}>
						<ProtectedRouteForAdmin>
							<UpdateProduct />
						</ProtectedRouteForAdmin>
					</Suspense>
				}
			/>
			<Route
				path="/signup"
				element={
					<Suspense fallback={<Loader />}>
						<SignUp />
					</Suspense>
				}
			/>
			<Route
				path="/login"
				element={
					<Suspense fallback={<Loader />}>
						<Login />
					</Suspense>
				}
			/>
		</Route>,
	),
);

export { routes };
