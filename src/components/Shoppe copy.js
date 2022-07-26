import { motion, AnimatePresence } from "framer-motion";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Shoppe = ({ handleShoppe, loadShoppe, animalChoice, shoppeArray, setShoppeArray }) => {
  console.log(shoppeArray);



    function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(shoppeArray);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setShoppeArray(items);
  }

  return (
      <motion.section className="shoppeContainer">
        <AnimatePresence exitBeforeEnter initial={false}>
          {loadShoppe && animalChoice === "badger" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0, rotate: 360 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              className="shoppe"
            >
              <p>UI 1</p>
              <p>Fruits</p>
              <p>Clothes</p>
              <p>Potions</p>
              <p>Health</p>

              <div>
                <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {shoppeArray.map(({id, url, alt}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <div className="characters-thumb">
                            <img src={url} alt={`${alt} Thumb`} />
                          </div>
                          <p>
                            { alt }
                          </p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
              </div>

              <button onClick={handleShoppe}>X</button>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.section>
    
  );
};

export default Shoppe;
