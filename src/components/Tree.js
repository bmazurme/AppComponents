import React from "react";
import { materials as data } from "./initData";
import TreeItem from "./TreeItem";

function Tree(props) {
  const [filters, setFilters] = React.useState(data);
  const [all, setAll] = React.useState(false);
  //const [flag, setFlag] = React.useState(false);

  function getCount() {
    let i = 0;
    filters.forEach(item => {
      i += item.children.length
    });
    return i;
  }

  function handleOnChange(evt) {
    setAll(false);
    const key = evt.target.value;
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
    setAll(!all);
    const arr = [];
    filters.forEach(item => {
      const row = {
        groupId: item.groupId,
        group: item.group,
        include: !all,
        children: []
      };
      item.children.forEach(child => {
        row.children.push({
          id: child.id,
          name: child.name,
          include: !all
        });
      });
      arr.push(row);
    });
    setFilters(arr);

    //props.checkFilter(!all);
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
  }
  
  return(<TreeItem filters={filters}
                   all={all}
                   handleOnChange={handleOnChange}
                   handleChange={handleChange} 
                   handleChangeAll={handleChangeAll} 
                   getCount={getCount}/>
  );
}

export default Tree;