import { useState } from "react";
import s from "./style.module.css";
import CatalogFilter from "../Catalog/Filter/CatalogFilter";
import CatalogItems from "../Catalog/Filter/CatalogItems";

function Sneakers() {
  const [gender, setGender] = useState<string>("");

  return (
      <section className={s.catalogBlock} id="catalog">
        <div className={s.container}>
            <h2>Каталог</h2>
          <div className={s.content}>
            <CatalogFilter setGender={setGender} />
            <CatalogItems gender={gender} />
          </div>
        </div>
      </section>
  );
}

export default Sneakers;