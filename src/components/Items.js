import {useDrag} from 'react-dnd'

const Items = ({id, url, alt}) => {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "potions", 
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    return (
        
        <img
        id={id}
        ref={drag}
        src={url}
        alt={alt}
        />
        
    )
}

export default Items