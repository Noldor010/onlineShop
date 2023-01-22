export const calcTotalPrice = (items) => {
  console.log(items)
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};


export const calcTotalCount = (items) =>{
  return items.reduce((sum, item) => { return sum + item.count}, 0);
} 

