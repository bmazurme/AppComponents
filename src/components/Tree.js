import React from "react";
import { materials as data } from "./initData";
import TreeItem from "./TreeItem";

function Tree() {
  const [filters, setFilters] = React.useState(data);
  const [all, setAll] = React.useState(false);

  function getCount() {
    let i = 0;
    filters.forEach(item => { 
      i += item.children.length;
    });
    return i;
  }

  function handleChangeAll() {
    setAll(!all);
    const arr = [];
    filters.forEach(item => {
      const _arr=[];
      item.children.forEach(child => {
        _arr.push({id: child.id, name: child.name, include: !all});
      });
      arr.push({
        groupId: item.groupId,
        group: item.group,
        include: !all,
        children: _arr
      });
    });
    setFilters(arr);
  }

  function handleChange(groupId, childId) {
    const arr = [];
    filters.forEach(
      (group) => {
        if (groupId === group.groupId) {
          const _arr = [];
          let groupInclude = (childId === null) ? !group.include : group.include;

          if (childId === null) {
            group.children.forEach(child => {
              _arr.push( {id: child.id, name: child.name, include: !group.include} );
            });
          } else {
            group.children.forEach(child => {
              let childInclude = (child.id === childId) ? !child.include : child.include;
              _arr.push( {id: child.id, name: child.name, include: childInclude} );
            });
          }

          arr.push({
            groupId: group.groupId,
            group: group.group,
            include: groupInclude,
            children: _arr
          });
        } else if (groupId !== group.groupId) {
          arr.push(group);
        }
      })
    setFilters(arr);
  }

  return (
    <TreeItem filters={filters} 
      handleChange={handleChange} 
      handleChangeAll={handleChangeAll} 
      getCount={getCount}/>
  );
}

export default Tree;