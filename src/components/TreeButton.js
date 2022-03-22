import React from "react";
import PopUpContainer from "./PopUpContaine";
import SeparateButton from "./SeparateButton";
import { materials as data } from "./initData";

function TreeButton () {
  const [openPopup, setOpenPopup] = React.useState(false);
  const [resetButton, setResetButton] = React.useState('All');
  const [filters, setFilters] = React.useState(data);
  const [checkedAll, setCheckedAll] = React.useState(false);
  const [input, setInput] = React.useState('');

  function getCount() {
    let i = 0;
    filters.forEach(item => {
      i += item.children.length
    });
    return i;
  }

  function handleClick() {
    setOpenPopup(!openPopup);
  }

  function checkFilter() {
    let flag = false;
    filters.forEach(item =>{
      if (item.include) {
        return flag = true;
      } else {
        item.children.forEach(child => {
          if (child.include) return flag = true;
        });
      }
    });
    !flag ? setResetButton('X') : setResetButton('All');
  }

  function handleReset() {
    checkFilter();
    setFilters(data);
    setCheckedAll(false);
    setInput('');
  }

  function handleOnChange(evt) {
    setCheckedAll(false);
    const key = evt.target.value;
    setInput(key);
    const arr = [];

    if (key.length > 0) {
      data.forEach(group => {
        const row = {
          groupId: group.groupId,
          group: group.group,
          include: group.include,
          children: [] 
        };
        group.children.forEach(item => {
          if (item.name.includes(key)) {
            row.children.push(item);
          }
        });

        if (group.group.includes(key) || row.children.length > 0) {
          arr.push(row);
        }
      }) 
      setFilters(arr);
    } else {
      setFilters(data);
    }
  }

  function handleChangeAll() {
    setCheckedAll(!checkedAll);
    const arr = [];
    filters.forEach(item => {
      const row = {
        groupId: item.groupId,
        group: item.group,
        include: !checkedAll,
        children: []
      };
      item.children.forEach(child => {
        row.children.push({
          id: child.id,
          name: child.name,
          include: !checkedAll
        });
      });
      arr.push(row);
    });
    setFilters(arr);
    checkFilter();
  }

  function handleChange(groupId, childId) {
    const arr = [];
    filters.forEach(group => {
        if (groupId === group.groupId) {
          const row = {
            groupId: group.groupId,
            group: group.group,
            include: (childId === null) ? !group.include : group.include,
            children: []
          };

          if (childId === null) {
            group.children.forEach(child => {
              row.children.push({
                id: child.id,
                name: child.name,
                include: !group.include
              });
            });
          } else {
            group.children.forEach(child => {
              row.children.push({
                id: child.id,
                name: child.name,
                include: (child.id === childId) ? !child.include : child.include
              });
            });
          }
          arr.push(row);
        } else if (groupId !== group.groupId) {
          arr.push(group);
        }
      })
    setFilters(arr);
    checkFilter();
  }

  return (
    <>
      <SeparateButton resetButton={resetButton} 
                      handleReset={handleReset} 
                      handleClick={handleClick} 
      />
      <PopUpContainer checkFilter={checkFilter} 
                      handleClick={handleClick} 
                      openPopup={openPopup}
                      getCount={getCount}
                      handleOnChange={handleOnChange}
                      handleChange={handleChange}
                      handleChangeAll={handleChangeAll}
                      filters={filters}
                      checkedAll={checkedAll}
                      input={input}
      />
    </>
  );
}

export default TreeButton;