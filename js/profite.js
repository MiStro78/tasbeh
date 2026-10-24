function count() {
    let buyprice=document.getElementById('buy-price').value;
    let sellprice=document.getElementById('sell-price').value;
    let productName=document.getElementById('product-name').value;
    let productImg=document.getElementById('product-img').value;
    let profite= sellprice - buyprice ;
    console.log(profite);
if (profite>0) {
    Swal.fire({
  title: "الربح موجب!",
  icon: "success",
  draggable: true
});
        let newRow=document.createElement('tr');
        newRow.innerHTML=`
        <th><img src="${productImg}" alt=""></th>
        <th>${productName}</th>
        <th>${buyprice}</th>
        <th>${sellprice}</th>
        <th style="color: ${profite > 0 ? 'lightgreen' : profite < 0 ? 'red' : 'orange'}">
    ${profite}
</th>
        `
        document.getElementById('product-table').getElementsByTagName('tbody')[0].appendChild(newRow);
}
else if(profite<0){
    Swal.fire({
  icon: "error",
  title:"الربح بالسالب!",
});
        let newRow=document.createElement('tr');
        newRow.innerHTML=`
        <th><img src="${productImg}" alt=""></th>
        <th>${productName}</th>
        <th>${buyprice}</th>
        <th>${sellprice}</th>
        <th style="color: ${profite > 0 ? 'lightgreen' : profite < 0 ? 'red' : 'orange'}">
    ${profite}
</th>
        `
        document.getElementById('product-table').getElementsByTagName('tbody')[0].appendChild(newRow);
}
else{
    Swal.fire({
       title: "مفيش ربح او خسارة",
      icon: "question"
    });
    let newRow=document.createElement('tr');
        newRow.innerHTML=`
        <th><img src="${productImg}" alt=""></th>
        <th>${productName}</th>
        <th>${buyprice}</th>
        <th>${sellprice}</th>
        <th style="color: ${profite > 0 ? 'lightgreen' : profite < 0 ? 'red' : 'orange'}">
    ${profite}
</th>
        `
        document.getElementById('product-table').getElementsByTagName('tbody')[0].appendChild(newRow);

}
}
    