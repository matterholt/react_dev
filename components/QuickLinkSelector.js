// temp copy paste, need a be componentize and cleaned up

import { useState } from 'react'
import { motion } from "framer-motion";

import Link from "next/link";
import Image from "next/image";

import { blogRoutes } from "../../routes/index";

const ContentContainer = ({ children }) => (
  <div className="translateZUpdate flex justify-between">
    {children}
  </div>
);
const QuickSearchItem = ({ linkData, setTagToView, tagToView }) => {
  const { image, path, title, tag } = linkData;
  const isCurrent = tagToView === tag;
  const highlighted = {
    background: "#ff8d8d",
    fontWeight: "900",
    fontSize: "35px",
  };




  return (
    <div
      style={isCurrent?highlighted: null}
      className=" m-1  transition-all containerAction"
      onClick={() => setTagToView(tag)}
    >
      <ContentContainer>
        <h2>{title}</h2>
        {isCurrent ?
        <Link
          href={{
            pathname: path,
            query: { tag },
          }}
        >
          <a className="text-red-100">Find Post</a>
        </Link> : null}
      </ContentContainer>
    </div>
  );
};

const RelatedImage = ({ desiredBlogQuickFind, tagToView, setTagToView }) => {
  const isCurrent = desiredBlogQuickFind.tag === tagToView;

  const variants = {
    standard: {
      scale: 1,
    },
    highlight: {
      scale: 1.8,
      position: "relative",
      zIndex:10,
    },
  };

  return (
    <motion.div
      onClick={() => setTagToView(desiredBlogQuickFind.tag)}
      animate={isCurrent ? "highlight" : "standard"}
      variants={variants}
      className="w-2/6 m-2"
    >
      <Image
        className="opacity-100 hover:opacity-80"
        src={desiredBlogQuickFind.image}
        layout="responsive"
        width={375}
        height={500}
      />
    </motion.div>
  );
};

const ImageController = ({ tagToView, setTagToView }) => {
  const desiredBlogImages = blogRoutes.map((quickLink) => (
    <RelatedImage
      tagToView={tagToView}
      desiredBlogQuickFind={quickLink}
      setTagToView={setTagToView}
    />
  ));

  return desiredBlogImages;
};

export default function QuickBogLink() {
  const [tagToView, setTagToView] = useState('default')
  const quickSearchItems = blogRoutes.map((linkData) => {
    return (
      <QuickSearchItem
        key={linkData.id}
        linkData={linkData}
        tagToView={tagToView}
        setTagToView={setTagToView}
      />
    );
  });



  
  return (
    <div className="container flex ">
      <div className="w-3/6 h-96 flex flex-col justify-evenly">
        {quickSearchItems}
      </div>

      {/* <div className="w-3/6 flex flex-wrap justify-center align-center relative"> */}

      <div className="w-3/6 flex justify-center items-center relative">
        <ImageController tagToView={tagToView} setTagToView={setTagToView} />
      </div>
    </div>
  );
};
