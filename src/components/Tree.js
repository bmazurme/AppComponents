import { materials } from "./initData";

function Tree() {
  return (
        <select className="popup__tree" name="pets" multiple size="1">
          {materials.map((material, index) =>         
            <optgroup key={index} label={`${material.group} ${material.children.length}` }>
              {
                material.children.map((item, i) => 
                
                  <option key={`${index}_${i}`} 
                          value={item.name}
                  >

                    {item.name}
                    
                  </option>
                )}
            </optgroup>
          )}
        </select>
  );
}

export default Tree;