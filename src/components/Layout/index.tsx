import { Outlet } from "react-router-dom";
import Header from "../Header/header";
import BasketBlock from "../Catalog/Filter/BasketBlock";
import { useState } from "react";
import Footer from "../Footer";



const Layout = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isBasketOpen, setIsBasketOpen] = useState<boolean>(false);

  const isOpenCallback = () => {
    setIsOpen(!isOpen);
  };

  const isBasketOpenCallback = () => {
    setIsBasketOpen(!isBasketOpen)
  }


  return (
    <>
      <Header
        isOpen={isOpen}
        setIsOpen={isOpenCallback}
        setIsBasketOpen={isBasketOpenCallback}
      />
      {isBasketOpen && <BasketBlock setIsBasketOpen={isBasketOpenCallback} />}
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

export default Layout;