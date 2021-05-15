var cartDeleteItem = document.querySelector(".sp_ct_action");
// console.log(cartDeleteItem);
// cartDeleteItem.array.forEach(element => {
//     element.onclick(deleteItem());
// });
console.log(cartDeleteItem);
function deleteItem(e) {
    console.log(e)
    if (e.parentElement.parentNode.id) {
        itemToDelete = document.querySelector("#" + e.parentElement.parentNode.id);
        if (itemToDelete) {
            itemToDelete.parentNode.removeChild(itemToDelete);
        }
    }
};
