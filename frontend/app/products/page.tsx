

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiFilter, FiPlus, FiX, FiMinus } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// FULL PRODUCT DATA including colors, strap type, category, brand, gender, price
const productsData = [
  { id: 1, name: "Black Leather", brand: "Rolex", color: "Black", price: 250, strap: "Leather", category: "Luxury", gender: "Men", img: "/products/p1.jpg" },
  { id: 2, name: "Rose Gold", brand: "Casio", color: "Rose Gold", price: 350, strap: "Metal", category: "Classic", gender: "Women", img: "/products/p2.jpg" },
  { id: 3, name: "White Dial", brand: "Fossil", color: "White", price: 200, strap: "Silicone", category: "Sport", gender: "Men", img: "/products/p3.jpg" },
  { id: 4, name: "Silver Chrono", brand: "Seiko", color: "Silver", price: 450, strap: "Metal", category: "Smart Watch", gender: "Women", img: "/products/p4.jpg" },
  { id: 5, name: "Rose Slim", brand: "Casio", color: "Rose", price: 350, strap: "Leather", category: "Classic", gender: "Women", img: "/products/p5.jpg" },
  { id: 6, name: "Black Steel", brand: "Rolex", color: "Black", price: 450, strap: "Metal", category: "Luxury", gender: "Men", img: "/products/p6.jpg" },
  { id: 9, name: "Blue Sport", brand: "Omega", color: "Blue", price: 500, strap: "Metal", category: "Classic", gender: "Men", img: "/products/p9.jpg" },
  { id: 10, name: "Pink Elegance", brand: "Tag Heuer", color: "Pink", price: 450, strap: "Metal", category: "Luxury", gender: "Women", img: "/products/p10.jpg" },
  { id: 11, name: "Gold Master", brand: "Rolex", color: "Gold", price: 650, strap: "Metal", category: "Luxury", gender: "Men", img: "/products/p11.jpg" },
  { id: 12, name: "Red Dial Classic", brand: "Seiko", color: "Red", price: 320, strap: "Metal", category: "Classic", gender: "Men", img: "/products/p12.jpg" },
  { id: 13, name: "Silver Minimal", brand: "Casio", color: "Silver", price: 210, strap: "Metal", category: "Classic", gender: "Women", img: "/products/p13.jpg" },
  { id: 14, name: "Gold Shine", brand: "Fossil", color: "Gold", price: 380, strap: "Metal", category: "Classic", gender: "Women", img: "/products/p14.jpg" },
  { id: 15, name: "Rose Beauty", brand: "Fossil", color: "Rose Gold", price: 340, strap: "Metal", category: "Classic", gender: "Women", img: "/products/p15.jpg" },
  { id: 16, name: "Black Steel Pro", brand: "Casio", color: "Black", price: 410, strap: "Metal", category: "Sport", gender: "Men", img: "/products/p16.jpg" },
  { id: 17, name: "Green Field", brand: "Seiko", color: "Green", price: 300, strap: "Nylon", category: "Sport", gender: "Men", img: "/products/p17.jpg" },
  { id: 18, name: "Rose Classic", brand: "Fossil", color: "Rose Gold", price: 360, strap: "Metal", category: "Classic", gender: "Women", img: "/products/p18.jpg" },
  { id: 19, name: "Black Diver", brand: "Rolex", color: "Black", price: 700, strap: "Rubber", category: "Sport", gender: "Men", img: "/products/p19.jpg" },
  { id: 20, name: "Diamond Lady", brand: "Tag Heuer", color: "Silver", price: 520, strap: "Metal", category: "Luxury", gender: "Women", img: "/products/p20.jpg" },
  { id: 21, name: "Golden Charm", brand: "Rolex", color: "Gold", price: 620, strap: "Metal", category: "Luxury", gender: "Women", img: "/products/p21.jpg" },
  { id: 22, name: "Steel Chrono", brand: "Seiko", color: "Silver", price: 410, strap: "Metal", category: "Sport", gender: "Men", img: "/products/p22.jpg" },
  { id: 23, name: "Black Tactical", brand: "Casio", color: "Black", price: 290, strap: "Rubber", category: "Sport", gender: "Men", img: "/products/p23.jpg" },
  { id: 24, name: "Blue Royal", brand: "Omega", color: "Blue", price: 540, strap: "Metal", category: "Luxury", gender: "Men", img: "/products/p24.jpg" },
  { id: 25, name: "Golden Chrono", brand: "Rolex", color: "Gold", price: 680, strap: "Metal", category: "Luxury", gender: "Men", img: "/products/p25.jpg" },
  { id: 26, name: "Blue Mesh", brand: "Fossil", color: "Blue", price: 260, strap: "Metal", category: "Classic", gender: "Men", img: "/products/p26.jpg" },
  { id: 27, name: "Skeleton Dial", brand: "Tag Heuer", color: "Brown", price: 590, strap: "Leather", category: "Luxury", gender: "Men", img: "/products/p27.jpg" },
  { id: 28, name: "Brown Classic", brand: "Seiko", color: "Brown", price: 370, strap: "Leather", category: "Classic", gender: "Men", img: "/products/p28.jpg" },
  { id: 29, name: "Sport Racer", brand: "Casio", color: "Blue", price: 330, strap: "Leather", category: "Sport", gender: "Men", img: "/products/p29.jpg" },
  { id: 30, name: "Golden Edge", brand: "Rolex", color: "Gold", price: 640, strap: "Metal", category: "Luxury", gender: "Men", img: "/products/p30.jpg" },
  { id: 31, name: "Silver Pro", brand: "Omega", color: "Silver", price: 470, strap: "Metal", category: "Sport", gender: "Men", img: "/products/p31.jpg" },
  { id: 32, name: "Rose Mini", brand: "Fossil", color: "Rose Gold", price: 310, strap: "Metal", category: "Classic", gender: "Women", img: "/products/p32.jpg" },
  { id: 33, name: "Steel Classic", brand: "Seiko", color: "Silver", price: 420, strap: "Metal", category: "Classic", gender: "Men", img: "/products/p33.jpg" },
  { id: 34, name: "Beige Fashion", brand: "Casio", color: "Beige", price: 280, strap: "Fabric", category: "Classic", gender: "Women", img: "/products/p34.jpg" },
  { id: 35, name: "Black Gold Mix", brand: "Rolex", color: "Black", price: 610, strap: "Metal", category: "Luxury", gender: "Men", img: "/products/p35.jpg" },
  { id: 36, name: "Minimal Lady", brand: "Fossil", color: "Black", price: 290, strap: "Leather", category: "Classic", gender: "Women", img: "/products/p36.jpg" },
  { id: 37, name: "Black Chronograph", brand: "Tag Heuer", color: "Black", price: 560, strap: "Metal", category: "Sport", gender: "Men", img: "/products/p37.jpg" }
];

// Dynamically generate filter options from products
const generateFilters = (products) => {
  return {
    Brands: [...new Set(products.map(p => p.brand))],
    Colors: [...new Set(products.map(p => p.color))],
    "Strap Type": [...new Set(products.map(p => p.strap))],
    "Category / Style": [...new Set(products.map(p => p.category))],
    Gender: [...new Set(products.map(p => p.gender))],
    Price: ["$100–$200","$201–$350","$351–$500","$501+"], // fixed ranges
  };
};

export default function ProductsPage() {
  const [openFilter, setOpenFilter] = useState(false);
  const [expanded, setExpanded] = useState({});
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const filterOptions = generateFilters(productsData);

  // Expand/collapse category
  const toggleExpand = (category) => {
    setExpanded({ ...expanded, [category]: !expanded[category] });
  };

  // Toggle selection for a filter (only selects, APPLY updates products)
  const toggleFilter = (category, value) => {
    let updatedFilters = [...selectedFilters];
    const exists = updatedFilters.find(f => f.category === category && f.value === value);

    if (exists) {
      updatedFilters = updatedFilters.filter(f => f !== exists);
    } else {
      // only one selection per category
      updatedFilters = [...updatedFilters.filter(f => f.category !== category), { category, value }];
    }

    setSelectedFilters(updatedFilters);
  };

  const removeFilter = (filter) => {
    setSelectedFilters(selectedFilters.filter(f => f !== filter));
  };

  const clearAllFilters = () => {
    setSelectedFilters([]);
    setFilteredProducts(productsData);
  };

  // APPLY button → filter products and close sidebar
  const applyFilters = () => {
    let filtered = productsData;

    selectedFilters.forEach(f => {
      switch(f.category) {
        case "Brands": filtered = filtered.filter(p => p.brand === f.value); break;
        case "Colors": filtered = filtered.filter(p => p.color === f.value); break;
        case "Price":
          switch(f.value){
            case "$100–$200": filtered = filtered.filter(p => p.price >= 100 && p.price <= 200); break;
            case "$201–$350": filtered = filtered.filter(p => p.price >= 201 && p.price <= 350); break;
            case "$351–$500": filtered = filtered.filter(p => p.price >= 351 && p.price <= 500); break;
            case "$501+": filtered = filtered.filter(p => p.price >= 501); break;
          }
          break;
        case "Strap Type": filtered = filtered.filter(p => p.strap === f.value); break;
        case "Category / Style": filtered = filtered.filter(p => p.category === f.value); break;
        case "Gender": filtered = filtered.filter(p => p.gender === f.value); break;
      }
    });

    setFilteredProducts(filtered);
    setOpenFilter(false);
  };

  return (
    <section className="w-full min-h-screen px-12 py-12">
      <h1 className="text-4xl font-semibold text-center mb-12">Our Products</h1>

      {/* Filter Button */}
      <div onClick={() => setOpenFilter(!openFilter)} className="flex items-center gap-2 cursor-pointer mb-10">
        <FiFilter size={22} />
        <span className="text-lg font-semibold">Filters</span>
      </div>

      <div className="flex gap-10">
        {/* Sidebar */}
        <div className={`transition-all duration-500 overflow-hidden ${openFilter ? "w-80" : "w-0"}`}>
          <div className={`border p-6 bg-white relative ${openFilter ? "max-h-[1200px]" : "max-h-0"} transition-all duration-500`}>
            {/* Clear All & Close */}
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm text-gray-400 cursor-pointer hover:underline" onClick={clearAllFilters}>Clear All Filters</p>
              <button onClick={() => setOpenFilter(false)} className="text-gray-500"><FiX size={20} /></button>
            </div>

            {/* Selected Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedFilters.map((f, idx) => (
                <div key={idx} className="flex items-center bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                  {f.value}
                  <FiX className="ml-1 cursor-pointer" onClick={() => removeFilter(f)} />
                </div>
              ))}
            </div>

            {/* Filter Categories */}
            {Object.keys(filterOptions).map((category, idx) => (
              <div key={idx} className="mb-4">
                <div className="flex justify-between items-center cursor-pointer py-2" onClick={() => toggleExpand(category)}>
                  <span className="font-medium">{category}</span>
                  {expanded[category] ? <FiMinus /> : <FiPlus />}
                </div>

                <div className={`transition-all duration-300 overflow-hidden ${expanded[category] ? "max-h-64 mt-2" : "max-h-0"}`}>
                  {/* Price as pills */}
                  {category === "Price" ? (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {filterOptions.Price.map((range, idx) => {
                        const selected = selectedFilters.some(f => f.category === "Price" && f.value === range);
                        return (
                          <div
                            key={idx}
                            onClick={() => toggleFilter("Price", range)}
                            className={`cursor-pointer px-3 py-1 rounded-full border ${selected ? "bg-black text-white border-black" : "bg-white text-gray-700 border-gray-300"} hover:bg-gray-900 hover:text-white transition`}
                          >
                            {range}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    filterOptions[category].map((option, idx2) => {
                      const selected = selectedFilters.some(f => f.category === category && f.value === option);
                      const disabled = selectedFilters.some(f => f.category === category) && !selected;
                      return (
                        <div
                          key={idx2}
                          className={`flex items-center gap-2 py-1 cursor-pointer ${disabled ? "opacity-40 pointer-events-none" : ""}`}
                          onClick={() => toggleFilter(category, option)}
                        >
                          <div className={`w-4 h-4 border rounded-full flex-shrink-0 flex items-center justify-center ${selected ? "bg-black" : "bg-white"}`}></div>
                          <span>{option}</span>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            ))}

            {/* APPLY Button */}
            <button className="w-full bg-black text-white py-3 mt-4" onClick={applyFilters}>
              APPLY
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-8 flex-1 transition-all duration-500 ${openFilter ? "grid-cols-3" : "grid-cols-4"}`}>
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div className="border p-5 hover:shadow-lg transition cursor-pointer">
                <div className="relative h-64 w-full">
                  <Image src={product.img} alt={product.name} fill className="object-contain" />
                </div>
                <h3 className="text-lg mt-4 font-semibold">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-6 mt-16">
        <button className="border p-3 hover:bg-gray-100 transition"><IoIosArrowBack size={20} /></button>
        <button className="px-4 py-2 border bg-black text-white">1</button>
        <button className="px-4 py-2 border hover:bg-gray-100">2</button>
        <button className="border p-3 hover:bg-gray-100 transition"><IoIosArrowForward size={20} /></button>
      </div>
    </section>
  );
}


















