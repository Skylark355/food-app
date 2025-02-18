import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

function ExploreMenu(category, setCategory) {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        consequuntur. Autem amet odit laboriosam enim architecto quidem
        similique tenetur suscipit.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                src={item.menu_image}
                alt=""
                className={category === item.menu_name ? "active" : ""}
              />
              <h3>{item.menu_name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExploreMenu;
