// import Image from "next/image";

// export default function FeaturesPage() {
//   return (
//     <section className="w-full h-[80vh] py-16 flex flex-col items-center">

//       {/* Heading */}
//       <h1 className="text-4xl font-bold mb-12">Features Watches</h1>

//       {/* Watches Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        
//         {/* Watch 1 */}
//         <div className="flex flex-col items-center p-6">
//           <Image
//             src="/watch1.png"
//             alt="Watch 1"
//             width={180}
//             height={180}
//             className="object-contain"
//           />
//           <h2 className="mt-4 font-semibold text-lg">Classic Watch</h2>
//           <p className="mt-2 text-gray-600">$199</p>
//           <button className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300">
//             Buy
//           </button>
//         </div>

//         {/* Watch 2 */}
//         <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
//           <Image
//             src="/watch2.png"
//             alt="Watch 2"
//             width={180}
//             height={180}
//             className="object-contain"
//           />
//           <h2 className="mt-4 font-semibold text-lg">Sporty Watch</h2>
//           <p className="mt-2 text-gray-600">$249</p>
//           <button className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300">
//             Buy
//           </button>
//         </div>

//         {/* Watch 3 */}
//         <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
//           <Image
//             src="/watch3.png"
//             alt="Watch 3"
//             width={180}
//             height={180}
//             className="object-contain"
//           />
//           <h2 className="mt-4 font-semibold text-lg">Luxury Watch</h2>
//           <p className="mt-2 text-gray-600">$399</p>
//           <button className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300">
//             Buy
//           </button>
//         </div>

//       </div>

//     </section>
//   );
// }



import Image from "next/image";

export default function Collections() {

  const watches = [
    {
      title: "ANATOM",
      img: "/images/anatom.jpg",
    },
    {
      title: "CENTRIX",
      img: "/images/centrix.jpg",
    },
    {
      title: "TRUE SQUARE",
      img: "/images/square.jpg",
    },
  ];

  return (
    <section className="py-20 px-10 bg-gray-100">

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold tracking-wide">
          EXPLORE OUR COLLECTIONS
        </h2>

        <p className="text-gray-600 mt-5 text-sm leading-relaxed">
          Rado is known as the Master of Materials: from high-tech ceramic
          to sapphire crystal and diamonds to stainless steel, our
          innovative watches have no boundaries when it comes to design.
          Feel and discover the Rado difference!
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">

        {watches.map((watch, index) => (
          <div key={index} className="group">

            {/* Image */}
            <div className="overflow-hidden">
              <Image
                src={watch.img}
                width={600}
                height={400}
                alt={watch.title}
                className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Title */}
            <h3 className="mt-6 text-xl font-semibold tracking-wide">
              {watch.title}
            </h3>

            {/* Discover */}
            <div className="mt-3 flex items-center gap-3 text-sm uppercase tracking-widest">
              <span>Discover</span>
              <div className="w-8 h-[1px] bg-black"></div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}