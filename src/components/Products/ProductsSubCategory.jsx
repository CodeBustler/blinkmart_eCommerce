import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import ProductCard from "../ProductCard/ProductCard";
import { scrollToTop } from "../utilities/RequiredFunctions";
import Loader from "../Utilities/Loader";
import { FaSortAmountUp } from "react-icons/fa";
// ROUTER
import { useParams } from "react-router-dom";
// ------------------------------------------------------

function ProductsSubCategory() {
	const { subCategoryName } = useParams();
	const { allProducts, loading } = useContext(MyContext);
	const [subCategoryItems, setSubCategoryItems] = useState([]);
	const [sortOrder, setSortOrder] = useState("asc");
	// ------------------------------------------------------

	// ------------------------------------------------------
	//  ************ FILTER SUB-CATEGORY ITEMS *************
	// ------------------------------------------------------
	useEffect(() => {
		const filterSubCategoryItems = allProducts.filter(
			(item) => item.subCategory === subCategoryName,
		);
		filterSubCategoryItems.reverse();
		setSubCategoryItems(filterSubCategoryItems);
		scrollToTop();
	}, [allProducts, subCategoryName]);
	console.log(subCategoryItems.map((p) => console.log(p.price)));

	// ------------------------------------------------------
	//  ************ HANDLE SORTING BY PRICE *************
	// ------------------------------------------------------
	const handeSortByPrice = () => {
		setSubCategoryItems((prevState) => {
			const sorted = [...prevState].sort((p1, p2) =>
				sortOrder === "asc"
					? parseInt(p1.price) - parseInt(p2.price)
					: parseInt(p2.price) - parseInt(p1.price),
			);
			return sorted;
		});

		// TOGGLE SORT
		setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
	};

	// ------------------------------------------------------
	return (
		<>
			<div className="container mx-auto mt-6 p-3 md:p-0">
				<div className="px-3 md:p-0 flex items-center justify-between">
					<h1 className="underline underline-offset-8 underline-heading text-2xl font-bold my-3  capitalize">
						{subCategoryName.replace(/_/g, " ")}
					</h1>
					<div
						className="flex items-center gap-2"
						onClick={handeSortByPrice}
					>
						<span className="font-semibold text-gray-500">
							Sort by price
						</span>
						{sortOrder === "asc" ? (
							<FaSortAmountUp className="text-2xl " />
						) : (
							<FaSortAmountUp className="text-2xl rotate-180" />
						)}
					</div>
				</div>
				{loading ? (
					<Loader />
				) : (
					<div className="container mx-auto ">
						<div
							className={`flex flex-wrap mt-10 gap-5  ${
								subCategoryItems.length < 4
									? "justify-center md:justify-start"
									: "justify-center md:justify-start"
							} `}
						>
							{subCategoryItems.map((item, index) => (
								<ProductCard key={index} item={item} />
							))}
						</div>
					</div>
				)}
			</div>
		</>
	);
}

export default ProductsSubCategory;
