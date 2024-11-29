const loadPhone = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const data = await res.json();
  const phones = data.data;
  console.log(phones);
  displayPhones(phones);
};
// const phoneContainer = document.querySelector("#phoneContainer");
// phoneContainer.textContent = "";

const displayPhones = (phones) => {
  const phoneContainer = document.querySelector("#phoneContainer");
  phoneContainer.textContent = "";
  const showAll = document.querySelector("#showAll");
  if (phones.length > 12) {
    showAll.classList.remove("hidden");
  } else {
    showAll.classList.add("hidden");
  }
  phones = phones.slice(0, 12);

  phones.forEach((phone) => {
    const phoneCart = document.createElement("div");
    phoneCart.classList = "card bg-gray-100 shadow-xl";
    phoneCart.innerHTML = `
                  <figure class="px-10 pt-10">
              <img
                src="${phone.image}"
                alt="Shoes"
                class="rounded-xl"
              />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">${phone.phone_name}</h2>
              <p>${phone.slug}</p>
              <div class="card-actions">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
    
    `;
    phoneContainer.appendChild(phoneCart);
  });
};

const handleSearch = () => {
  const searchField = document.querySelector("#searchField");
  const searchText = searchField.value;
  loadPhone(searchText);
};
