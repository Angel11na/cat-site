"use client";
import { useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();

  return (
    <nav>


      <div className="nav-btn">
        <button
          onClick={(e) => { router.push("/") }}
        ><i className='bx bx-home bx-tada' ></i></button>
        <p>Головна</p>
      </div>
      <div className="nav-btn">

        <button
          onClick={(e) => { router.push("/origin") }}
        ><i className='bx bx-dna bx-tada' ></i></button>
        <p>Походження</p>
      </div>


      <div className="nav-btn">
        <button
          onClick={(e) => { router.push("/food") }}
        ><i className='bx bx-bowl-hot bx-tada bx-rotate-90' ></i></button>
        <p>Харчування</p>
      </div>

      <div className="nav-btn">
        <button
          onClick={(e) => { router.push("/nature") }}
        ><i className='bx bxs-cat bx-tada' ></i></button>
        <p>Характер</p>
      </div>

      <div className="nav-btn">
        <button
          onClick={(e) => { router.push("/facts") }}
        ><i className='bx bx-book-open bx-tada' ></i></button>
        <p>Факти</p>
      </div>


    </nav>
  );
}
export default Nav;