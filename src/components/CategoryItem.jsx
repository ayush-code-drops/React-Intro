 function CategoryItem({ name, url }) {
    return (
        <div>
            <img src={url} />
            <h5>{name}</h5>
        </div>
    )
}

export default CategoryItem