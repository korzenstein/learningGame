import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Shoppe = ({
  handleShoppe,
  loadShoppe,
  animalChoice,
  shoppeArray,
  setShoppeArray,
  itemChoice,
  setItemChoice,
  goBack
}) => {
  

  const handleItemChoice = (choice) => {
    setItemChoice(choice);
  };

  console.log(itemChoice);
  return (
    <motion.section className="shoppeContainer">
      <AnimatePresence exitBeforeEnter initial={false}>
        {loadShoppe && animalChoice === "badger" ? (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0, rotate: 360 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="shoppe"
          >
            {itemChoice ? (
              <>
                {/* Individual Item */}
                <motion.div
                layout
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="topDetail"
                >
                  <div className="exitContainer">
                    <button className="exit" onClick={goBack}>
                      ↚
                    </button>
                    <button className="exit" onClick={handleShoppe}>
                      x
                    </button>
                  </div>
                  <div className="itemContainer">
                    <p>Images</p>
                  </div>
                  <div className="itemTitleContainer">
                    {shoppeArray.map((item) => {
                      return (
                        <>
                          {console.log(item)}
                          {item.id === itemChoice ? (
                            <div 
                            className="itemSub"
                            key={item.id}>
                              <div className="imgContainer">
                              <img src={item.url} alt={item.class} />
                              </div>
                              <p>{item.type}</p>
                            </div>
                          ) : null}
                        </>
                      );
                    })}
                    <p>Potion</p>
                    <p>Magic Level: 34</p>
                  </div>
                </motion.div>
                <div className="bottom">
                  <div className="amount">
                    <p className="subtitle">amount</p>
                    <p className="display">120</p>
                  </div>
                  <div className="price">
                    <p className="subtitle">price</p>
                    <p className="display">$3</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Shoppe Inventory Overview */}
                <div className="topInventory">
                  <div className="exitContainer">
                    <button className="exit" onClick={handleShoppe}>
                      x
                    </button>
                  </div>

                  <ul>
                    {shoppeArray.map((item) => {
                      return (
                        <li
                          onClick={() => handleItemChoice(item.id)}
                          key={item.id}
                        >
                          <img src={item.url} alt={item.type} />
                          <p>{item.type}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="bottom"></div>
              </>
            )}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.section>
  );
};

export default Shoppe;
