import React from "react";

function Filter({
  section,
  sectionIdx,
  activeFilters,
  setActiveFilters,
  activeFilterOptions,
  onUpdateFilter,
}) {
  const onChangeFilter = (type, value, event) => {
    event.preventDefault(); // Prevent page from jumping to the top

    if (isExisted(value)) {
      removeOption(value, type);
    } else {
      addOption(value, type);
    }
    onUpdateFilter();
  };

  const isExisted = (value) => {
    return activeFilterOptions.includes(value);
  };

  const addOption = (value, type) => {
    activeFilterOptions.push(value);
    updateFilter(type);
  };

  const removeOption = (value, type) => {
    let index = activeFilterOptions.indexOf(value);
    activeFilterOptions.splice(index, 1);
    updateFilter(type);
  };

  const updateFilter = (type) => {
    let updatedFilters = activeFilters.map((af) => {
      if (af.type === type) {
        af.options = activeFilterOptions;
      }
      return af;
    });
    setActiveFilters(updatedFilters);
  };

  return (
    <div key={section.name} className={sectionIdx === 0 ? null : "pt-10"}>
      {/* <fieldset> */}
        {/* <legend className="block text-sm font-medium text-gray-900">
          {section.name}
        </legend> */}
        <div className="flex flex-row py-2 gap-8">
          {section.options.map((option, optionIdx) => (
            <div
              key={`${option.value}-${optionIdx}`}
              className="flex flex-row items-center justify-center rounded-full bg-green-700 p-4"
            >
              <button
                id={`${section.id}-${optionIdx}`}
                name={`${section.id}[]`}
                className="h-5 w-30 text-white"
                onClick={(event) => onChangeFilter(section.id, option.value, event)}
              >
                {option.label}
              </button>
            </div>
          ))}
        </div>
      {/* </fieldset> */}
    </div>
  );
}

export default Filter;
