const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const ulEl = document.querySelector(".gallery");

images.map((image) => {
  const liEl = document.createElement("li");
  const imgElement = document.createElement("img");

  imgElement.src = image.url;
  imgElement.alt = image.alt;

  liEl.appendChild(imgElement);
  ulEl.appendChild(liEl);


 imgElement.style.width = "350px";
 imgElement.style.height = "200px";
 liEl.style.padding = "20px";
 ulEl.style.display = "flex";
 ulEl.style.listStyle = 'none';


});


