import Popular from "../components/Popular";
import Dessert from "../components/Dessert";

export default function Home() {

  return (
  <>
    <div className="px-5 container mx-auto text-center py-10">
      <Popular/>
    </div>
    <div className="px-5 container mx-auto text-center py-10">
      <Dessert/>
    </div>
  </>
  )
}