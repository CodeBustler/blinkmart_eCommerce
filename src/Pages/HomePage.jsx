import { useContext, useEffect, useState } from "react";
import { MyContext } from "../App";
// COMPONENTS
import CategoryContainer from "../components/ProductCard/CategoryContainer";
import ContainerForCard from "../components/ProductCard/ContainerForCard";
import ProductCard from "../components/ProductCard/ProductCard";
// UTILITIES
import ImageSlider from "../components/Utilities/ImageSlider";
import ProductsSlider from "../components/Utilities/ProductsSlider";
import hero1 from "../assets/desktop_hero/hero1.jpg";
import hero2 from "../assets/desktop_hero/hero2.jpg";
import hero3 from "../assets/desktop_hero/hero3.jpg";
import hero4 from "../assets/desktop_hero/hero4.jpg";
import mHero1 from "../assets/mobile_hero/mHero1.png";
import mHero2 from "../assets/mobile_hero/mHero2.png";
import mHero3 from "../assets/mobile_hero/mHero3.png";

// ------------------------------------------------

function HomePage() {
	const { allProducts } = useContext(MyContext);

	// --------------------------------------------------
	// ********** FUNCTION FILTERING PRODUCTS **********
	// --------------------------------------------------
	const filterProductsBySubCategory = (subCategory) =>
		allProducts.filter((product) => product.subCategory === subCategory);

	// FILTERED PRODUCTS
	const mobiles = filterProductsBySubCategory("mobiles");
	const laptops = filterProductsBySubCategory("laptops");
	const tablets = filterProductsBySubCategory("tablets");
	const smartwatches = filterProductsBySubCategory("smart_watches");
	const mensShirts = filterProductsBySubCategory("mens_shirts");
	const mensFootwear = filterProductsBySubCategory("mens_footwear");
	const programmingBooks = filterProductsBySubCategory("books_programming");
	const devotionalBooks = filterProductsBySubCategory("books_devotional");
	const comicBooks = filterProductsBySubCategory("books_comics");
	const mensJackets = filterProductsBySubCategory("mens_jackets");
	const kidsCloth = filterProductsBySubCategory("kids_cloth");
	const kidsFootwear = filterProductsBySubCategory("kids_footwear");
	const womensFootwear = filterProductsBySubCategory("womens_footwear");
	const womensDresses = filterProductsBySubCategory("womens_dresses");
	const womensTops = filterProductsBySubCategory("womens_tops");
	const jewelleryGold = filterProductsBySubCategory("jewellery_gold");
	const jewellerySilver = filterProductsBySubCategory("jewellery_silver");
	// ------------------------------------------------

	const images = [hero1, hero2, hero3, hero4];
	const mobileImages = [mHero1, mHero2, mHero3];

	return (
		<div className="bg-gray-200">
			<div className="hidden md:block">
				<ImageSlider images={images} />
			</div>
			<div className="md:hidden">
				<ProductsSlider />
			</div>
			<div className="md:hidden">
				<ImageSlider images={mobileImages} />
			</div>
			{/*MAIN CONTAINER */}
			<div className="container mx-auto relative md:-top-36">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
					<CategoryContainer title={"Mobiles"} category={mobiles} />
					<CategoryContainer
						title={"Men's Shirts & T-Shirts"}
						category={mensShirts.reverse()}
					/>
					<CategoryContainer title={"Laptops"} category={laptops} />
					<CategoryContainer title={"Tablets"} category={tablets} />
					<CategoryContainer
						title={"Men's Footwear"}
						category={mensFootwear}
					/>
					<CategoryContainer
						title={"Programming Books"}
						category={programmingBooks}
					/>
				</div>
			</div>
			{/*ROW CONTAINER*/}
			<div className="container mx-auto p-4 md:p-0 relative -top-36">
				<ContainerForCard
					containerTitle={"Smart Watches"}
					filterProducts={"smart_watches"}
				>
					{smartwatches.reverse().map((item, index) => (
						<ProductCard item={item} key={index} />
					))}
				</ContainerForCard>
			</div>
			{/*MAIN CONTAINER */}
			<div className="container mx-auto relative -top-28 ">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
					<CategoryContainer
						title={"Comic Books"}
						category={comicBooks}
					/>
					<CategoryContainer
						title={"Kid's Cloths"}
						category={kidsCloth}
					/>
					<CategoryContainer
						title={"Kid's Footwear"}
						category={kidsFootwear}
					/>
					<CategoryContainer
						title={"Men's Jackets"}
						category={mensJackets}
					/>
					<CategoryContainer
						title={"Women's Dresses"}
						category={womensDresses}
					/>
					<CategoryContainer
						title={"Women's Tops"}
						category={womensTops}
					/>
				</div>
			</div>
			{/*ROW CONTAINER*/}
			<div className="container mx-auto p-4 md:p-0 relative -top-28">
				<ContainerForCard
					containerTitle={"Devotional Books"}
					filterProducts={"books_devotional"}
				>
					{devotionalBooks.reverse().map((item, index) => (
						<ProductCard item={item} key={index} />
					))}
				</ContainerForCard>
			</div>
			{/*MAIN CONTAINER */}
			<div className="container mx-auto relative -top-16 ">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4">
					<CategoryContainer
						title={"Women's Footwear"}
						category={womensFootwear}
					/>
					<CategoryContainer
						title={"Jewellery Gold"}
						category={jewelleryGold}
					/>
					<CategoryContainer
						title={"Jewellery Silver"}
						category={jewellerySilver}
					/>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
