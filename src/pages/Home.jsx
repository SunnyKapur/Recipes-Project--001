import axios from "../utils/Axios";

const Home = () => {
  const getproduct = async () => {
    try {
      const response = await axios.get("/products");
      console.log(response.data);
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={getproduct}>Get Products</button>
    </div>
  );
};

export default Home;
