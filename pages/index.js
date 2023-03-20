import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import SentimentLogic from "../components/SentimentLogic";

const Home = () => (
  <div className="">
    <Head>
      <title>ademola store</title>
    </Head>

    {/** Header  */}

    <div className="bg-gray-100">
      <Header />
      <main className="max-w-screen-xl mx-auto">
        {/** Banner */}
        <Banner />

        {/** productFeed */}
        <ProductFeed products={productHome} />
      </main>
    </div>
  </div>
);

export default Home;

/**
 export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products: products,
    },
  };
} */

// data
export const productsa = [
  {
    id: 1,
    title: "Apple",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/apple.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Bread",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/bread.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 3,
    title: "Bean",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/bean.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 4,
    title: "Butter",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/butter.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 5,
    title: "Cheese",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/cheese.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 6,
    title: "Chocolate",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/chocolate.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 7,
    title: "Corn",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/corn.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 8,
    title: "Dill",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/dill.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 9,
    title: "Eggs",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/egg.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 10,
    title: "Ice cream",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/iceCream.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 11,
    title: "Milk",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/milk.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 12,
    title: "Nutmeg",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/nutmeg.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 13,
    title: "Onion",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/onion.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 14,
    title: "Sugar",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/sugar.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 15,
    title: "Unicon",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/unicorn.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 16,
    title: "Yogurt",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/foodPics/yogurt.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
];

export const productHome = [
  {
    id: 1,
    title: "Speaker",
    price: 6567.39,
    description:
      " K2 Powerful Bass USB Notebook Stereo Speakers Subwoofer Portable Full Frequency Speaker for Desktop PC Laptop Mobile Phone",
    category: "Consumer Electronics",
    image: "/productPics/speaker.jpg",
    rating: {
      rate: 4.5,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Apple iPad",
    price: 90.95,
    description:
      "The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day Amazon Renewed Guarantee. ",
    category: "men's clothing",
    image: "/productPics/ipad.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 3,
    title: "SAMSUNG Galaxy Z Flip 4",
    price: 513000.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/productPics/samson.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 4,
    title: "Gaming Monitor",
    price: 171000.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/productPics/monitor.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 5,
    title: "Webcam",
    price: 109.95,
    description:
      "Logitech C920x HD Pro Webcam, Full HD 1080p/30fps Video Calling, Clear Stereo Audio, HD Light Correction, Works with Skype, Zoom, FaceTime, Hangouts",
    category: "Electronics",
    image: "/productPics/webcam.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 6,
    title: "Apple MacBook",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/productPics/macbook.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 7,
    title: "Peak",
    price: 109.95,
    description:
      "This book is a breakthrough, a lyrical, powerful, science-based narrative that actually shows us how to get better (much better) at the things we care about.",
    category: "Books",
    image: "/productPics/peak.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 8,
    title: "Atomic Habit",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "Books",
    image: "/productPics/atomicHabit.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 9,
    title: "Deep Work",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "Books",
    image: "/productPics/deepWork.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 10,
    title: "NIVEA",
    price: 109.95,
    description:
      "Quick Nourishing: NIVEA body lotion for dry skin nourishes, intensively moisturizes, and soothes dry rough skin after just one application",
    category: "Beauty care",
    image: "/productPics/nivea.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 11,
    title: "Vaseline",
    price: 109.95,
    description:
      "Vaseline Intensive Care Essential Healing Body Lotion provides fast-absorbing moisture to deeply moisturize dry, rough skin. Clinically proven to keep skin healed for 3 weeks",
    category: "Beauty care",
    image: "/productPics/vaseline.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 12,
    title: "Dove",
    price: 109.95,
    description:
      "We believe that cleansing should be an opportunity for you to take a few moments just for yourself.",
    category: "Beauty care",
    image: "/productPics/dove.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 13,
    title: "Black Suit",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "/productPics/suit.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 14,
    title: "Suit set",
    price: 109.95,
    description:
      "Known for revolutionary style since 1921, Van Heusen meets the needs of the modern professional with stylish and innovative classics.",
    category: "men's clothing",
    image: "/productPics/suitSet.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 15,
    title: "Milk",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "foods",
    image: "/productPics/milk.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 16,
    title: "Yogurt",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "foods",
    image: "/productPics/yogurt.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
];
