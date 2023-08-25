    const products = [

        {
          id: 1,
          title: "MEN’S CLOTHES",
          category: "T-shirt",
          name:"Concepts Solid Pink Men’s Polo",
          price: "$150",
          img: "./images/product-7.jpg",
          discount: `40% `,
        },
        {
            id: 2,
            title: "MEN’S CLOTHES",
            category: "Bags",
            name:"Concepts Solid Pink Men’s Polo",
            price: "$150",
            img: "./images/product-2.jpg",
            discount: `40% `,
          },
          {
            id: 3,
            title: "MEN’S CLOTHES",
            category: "hoodies",
            name:"Concepts Solid Pink Men’s Polo",
            price: "$150",
            img: "./images/product-3.jpg",
            discount: `40% `,
          },
          {
            id: 4,
            title: "MEN’S CLOTHES",
            category: "hoodies",
            name:"Concepts Solid Pink Men’s Polo",
            price: "$150",
            img: "./images/product-4.jpg",
            discount: `  `,
          },
          {
            id: 5,
            title: "MEN’S CLOTHES",
            category: "hoodies",
            name:"Concepts Solid Pink Men’s Polo",
            price: "$150",
            img: "./images/product-5.jpg",
            discount: `40% `,
          },
          {
            id: 6,
            title: "MEN’S CLOTHES",
            category: "T-shirt",
            name:"Concepts Solid Pink Men’s Polo",
            price: "$150",
            img: "./images/product-6.jpg",
            discount: ` `,
          },
          {
            id: 7,
            title: "MEN’S CLOTHES",
            category: "T-shirt",
            name:"Concepts Solid Pink Men’s Polo",
            price: "$150",
            img: "./images/product-7.jpg",
            discount: `40% `,
          },
          {
            id: 8,
            title: "MEN’S CLOTHES",
            category: "hoodies",
            name:"Concepts Solid Pink Men’s Polo",
            price: "$150",
            img: "./images/product-4.jpg",
            discount: ` `,
          },

        
      ];

      const sectionCenter = document.querySelector('.product-center-container');
      const filterBtns = document.querySelectorAll('.filter-btn');

      // load items
     window.addEventListener("DOMContentLoaded",function(){
    
        displayMenuItems(products);
     });




     filterBtns.forEach(function(btn){

        btn.addEventListener("click",function(e){
    
            const category = e.currentTarget.dataset.id;
            const menuCategory = products.filter(function(menuItem){
    
                if(menuItem.category === category){
                    return menuItem;
                }
            });
            
            if(category === "all"){
                displayMenuItems(products);
            }else{
                displayMenuItems(menuCategory);
            }
        });
    
      });



     function displayMenuItems(MenuItems){

        let displayMenu = MenuItems.map(function(item){
            let discount = item.discount.trim();

            let discountElement = '';
            if (discount !== '') {
            discountElement = `<span class="discount">${discount}</span>`;
            }


            return `

            <div class="product-item">
                    <div class="overlay">
                        <a href="productDetails.html" class="product-thumb">
                        <img src="${item.img}" alt="${item.img}" />
                        </a>
                        ${discountElement}
                    </div>

                    <div class="product-info">
                        <span>${item.title}</span>
                        <a href="productDetails.html">${item.name}</a>
                        <h4>${item.price}</h4>
                    </div>

                    <ul class="icons">
                    <li><i class="bx bx-heart"></i></li>
                    <li><i class="bx bx-search"></i></li>
                    <li><i class="bx bx-cart"></i></li>
                    </ul>
            </div>
            `;
        });
    
        displayMenu = displayMenu.join("");
        sectionCenter.innerHTML = displayMenu;

        
    
      }

      

      

