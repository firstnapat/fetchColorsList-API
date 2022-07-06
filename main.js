const itemsContainer = document.getElementById("list-items");

function addItem(item) {
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">' + item.name + '</h5>\n' +
        '        <p class="card-text">' + item.pantone_value + '</p>\n' +
        '        <div style="background:' + item.color + ';">' + item.color + '</div>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    itemsContainer.innerHTML += itemHTML;
}

async function fetchColorsList() {
    const allColors = [{
            "id": 6,
            "name": "Dummy color",
            "year": 2005,
            "color": "#53B0AE",
            "pantone_value": "15-5217"
        }];
    /*
        Axios code should goes here
    */
  const response = await await axios.get('https://reqres.in/api/data');
  console.log(response)
  const { total_pages } = response.data;
  console.log(`Total page ${total_pages}`)
  for (let i = 1; i<=total_pages; i++) {
    const response = await axios.get('https://reqres.in/api/data', { params: { page: i }})
    console.log(`Page ${i}`);
    console.log(response.data.data); 
    const colors = response.data.data
    colors.forEach((color)=>allColors.push(color))
  } 
// async function fetchColorsList() {
//   const response = await axios.get('https://reqres.in/api/data',{ params:{ page: 1} });
//   console.log(response.data);
//   const { color } = response;
//   console.log(color.data);
//     let allColors = data.data
  
    itemsContainer.innerHTML = '';
    for (let i = 0; i < allColors.length; i++) {
        addItem(allColors[i]);
    }
}
fetchColorsList();
