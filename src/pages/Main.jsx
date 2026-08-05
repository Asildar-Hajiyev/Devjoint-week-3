import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { getAllUsers } from "../redux/dataSlice";

function Main() {
  const dispatch = useDispatch();
  const { data, loading , error} = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <p>Xəta: {error}</p>;
  return (
    <div className="flex items-center justify-between flex-wrap p-2 ">{data && data.map((item) => <Card key={item.id} item={item} />)}</div>
  );
}

export default Main;
