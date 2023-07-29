import React from "react";
import componentimg from "../contentimg.jpg";

const Artworks = () => {
  return (
    <div className="gradient-bg-artworks">
      <div className="w-4/5 py-10 mx-auto">
        <h4 className="text-white text-4xl font-bold uppercase text-gradient2">
          Latest Artworks
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-4 py-3 px-2">
          {Array(4)
            .fill()
            .map((nft, i) => (
              <Card key={i} nft={nft} />
            ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({ nft }) => (
  <div className="w-full bg-gray-800 my-3 p-4 shadow-md shadow-green-600 rounded-md overflow-hidden">
    <img
      className="h-60  shadow-sm shadow-green-300 px-3 w-full object-cover rounded-md my-2 p-3"
      src={componentimg}
      alt="nft"
    />
    <h4 className="text-blue-500 font-extrabold">NFT #{nft}</h4>
    <p className="text-white text-sm font-light">
      lorem han agnfso adnfgad dfsrtg sfnalr aovabgdg adaos adf aerga asdfaert
      asgfaerg asgfaer adgearga ageragr
    </p>

    <div className="flex justify-between items-center mt-3">
      <div className="flex flex-col">
        <small className="text-green-400 font-bold text-xs">Current Price</small>
        <p className="text-purple-500 font-extrabold text-sm">0.50 MATIC</p>
      </div>
      <button className="text-white text-sm font-extrabold shadow-md hover:text-blue-500 hover:bg-white px-2 py-1 mx-2 bg-blue-500 rounded-md">
      view
      </button>
    </div>
  </div>
);
export default Artworks;
