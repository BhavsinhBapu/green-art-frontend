import { HiChevronRight } from "react-icons/hi";
import { P2pBlogCard } from "./P2pBlogCard";

export const P2pBlog = () => {
  const p2pBlogCardList = [
    {
      img: "https://tradexpro-laravel.cdibrandstudio.com/storage/blog_news/news/thumbnail/63d267e832d29.jpg",
      title: "BTC sees a slight retracement…",
      discription:
        "nbsp;Crypto is too diverse for one regulatory frameworkAny claim that we should regulate crypto as X isn't very helpful, and that's because the stuff we call.",
      date: "Jan 26th 23 5:45:45 pm",
    },
    {
      img: "https://tradexpro-laravel.cdibrandstudio.com/storage/blog_news/news/thumbnail/63d267e832d29.jpg",
      title: "BTC sees a slight retracement…",
      discription:
        "nbsp;Crypto is too diverse for one regulatory frameworkAny claim that we should regulate crypto as X isn't very helpful, and that's because the stuff we call.",
      date: "Jan 26th 23 5:45:45 pm",
    },
    {
      img: "https://tradexpro-laravel.cdibrandstudio.com/storage/blog_news/news/thumbnail/63d267e832d29.jpg",
      title: "BTC sees a slight retracement…",
      discription:
        "nbsp;Crypto is too diverse for one regulatory frameworkAny claim that we should regulate crypto as X isn't very helpful, and that's because the stuff we call.",
      date: "Jan 26th 23 5:45:45 pm",
    },
  ];
  return (
    <div className="container mt-5 pt-5">
      <div className="row align-items-center">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <h3 className="pb-2">P2P Blog</h3>
          <a className="p2pBlogMore" href="">
            View More <HiChevronRight />
          </a>
        </div>
        {p2pBlogCardList.map((item, index) => (
          <P2pBlogCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
