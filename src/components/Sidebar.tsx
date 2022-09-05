import React from "react";
import Filter from "./Filter";

const Sidebar = () => {
  const filters = [
    {
      name: "attack-type",
      values: ["melee", "ranged"],
    },
    {
      name: "primary-attribute",
      values: ["strength", "agility", "intelligence"],
    },
    {
      name: "role",
      values: [
        "carry",
        "disabler",
        "durable",
        "escape",
        "initiator",
        "jungler",
        "nuker",
        "pusher",
        "support",
      ],
    },
  ];
  return (
    <div className="sidebar flow">
      <section className="filters">
        <h2 id="filters">Filters</h2>

        <fieldset className="flow">
          <legend>Filter by</legend>
          {filters.map((filterType) => (
            <div className="box filter-group" id={filterType.name}>
              <p className="box__title"> {filterType.name}</p>
              {filterType.values
                  .map(value => (
                     
                    <div className="checkbox">
                      <input
                        type="checkbox"
                        id={value}
                        name={value}
                      />
                      <label htmlFor={value}>
                        <span className="checkbox__fakebox"></span>
                        {/* <svg height="1em" viewBox="0 0 20 15">
                          <use xlink:href="checkmark"></use>
                        </svg> */}
                        <span>{value}</span>
                      </label>
                    </div>
                  )
                  )
                  }
              </div>
            // </div>
          ))}
        </fieldset>
      </section>
    </div>
  );
};

export default Sidebar;
