import axios from "axios";

const Home = () => {
  const getproduct = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products/1");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return <div>
    <h1>Home</h1>
    <button onClick={getproduct}>Get Products</button>
  </div>;
};

export default Home;
