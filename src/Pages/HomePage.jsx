import React, { useContext } from "react";
import hero from "../assets/desktop_hero/hero1.jpg";
import CategoryContainer from "../components/ProductCard/CategoryContainer";
import ImageSlider from "../components/Utilities/ImageSlider";
import { MyContext } from "../App";
import ContainerForCard from "../components/ProductCard/ContainerForCard";
import ProductCard from "../components/ProductCard/ProductCard";

function HomePage() {
	const { allProducts } = useContext(MyContext);

	const filterProductsBySubCategory = (subCategory) =>
		allProducts.filter((product) => product.subCategory === subCategory);

	const mobiles = filterProductsBySubCategory("mobiles");
	const laptops = filterProductsBySubCategory("laptops");
	const tablets = filterProductsBySubCategory("tablets");
	const smartwatches = filterProductsBySubCategory("smart_watches");
	const mensShirts = filterProductsBySubCategory("mens_shirts");
	const mensFootwear = filterProductsBySubCategory("mens_footwear");
	const programmingBooks = filterProductsBySubCategory("books_programming");
	const devotionalBooks = filterProductsBySubCategory("books_devotional");
	const comicBooks = filterProductsBySubCategory("books_comics");

	return (
		<div className="bg-gray-200">
			<ImageSlider />
			{/*PRODUCTS CONTAINER */}
			<div className="container mx-auto relative -top-36">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
					<CategoryContainer title={"Mobiles"} category={mobiles} />
					<CategoryContainer
						title={"Men's Shirts & T-Shirts"}
						category={mensShirts.reverse()}
					/>
					<CategoryContainer title={"Laptops"} category={laptops} />
					<CategoryContainer title={"Tablets"} category={tablets} />
					<CategoryContainer
						title={"Mens Footwear"}
						category={mensFootwear}
					/>
					<CategoryContainer
						title={"Programming Books"}
						category={programmingBooks}
					/>
				</div>
			</div>
			{/*LATEST PRODUCTS*/}
			<div className="container mx-auto p-4 md:p-0 relative -top-36">
				<ContainerForCard
					containerTitle={"Smart Watches"}
					filterProducts={"smart_watches"}
				>
					{smartwatches.reverse().map((item) => (
						<ProductCard item={item} />
					))}
				</ContainerForCard>
			</div>
			{/*PRODUCTS CONTAINER */}
			<div className="container mx-auto relative -top-28 ">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
					<CategoryContainer
						title={"Comic Books"}
						category={comicBooks}
					/>
					<CategoryContainer title={"Jewellery"} category={laptops} />
					<CategoryContainer
						title={"Womens Dresses"}
						category={mensShirts}
					/>
					<CategoryContainer
						title={"Womens Footwear"}
						category={mensShirts}
					/>
				</div>
			</div>
			{/*LATEST PRODUCTS*/}
			<div className="container mx-auto p-4 md:p-0 relative -top-28">
				<ContainerForCard
					containerTitle={"Devotional Books"}
					filterProducts={"books_devotional"}
				>
					{devotionalBooks.reverse().map((item) => (
						<ProductCard item={item} />
					))}
				</ContainerForCard>
			</div>
		</div>
	);
}

export default HomePage;
