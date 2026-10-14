
// Get category from URL
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

// ======================================
// CATEGORY DATA
// EDIT IMAGE NAMES IN THIS SECTION
// ======================================

const categoryData = {

    "live-deals": {
        title: "Trending Products",
        name: "Laptop",
        price: 45000,
        products: [
            {
                name: "Laptop 1",
                price: 45000,
                image1: "images/laptop1.avif",
                
            },
            {
                name: "dry fruits",
                price: 400,
                image1: "images/frt1.jpeg",
                
            },
            {
                name: "paste",
                price: 47000,
                image1: "images/paste-2.jpeg",
                
            },
            {
                name: "jeans",
                price: 4000,
                image1: "images/jeans-1.jpeg",
        
            },
            {
                name: "pillows",
                price: 500,
                image1: "images/bed2.jpeg",
        
            },
            {
                name: "Dell",
                price: 50000,
                image1: "images/laptop1.avif",
            },
            {
                name: "jeans",
                price: 500,
                image1: "images/jeans-3.jpeg",
               
            },
            {
                name: "dry fruits",
                price: 200,
                image1: "images/frt4.jpeg",
                
            },
            {
                name: "sandles",
                price: 600,
                image1: "images/slipper1.jpeg",
        
            },
            {
                name: "jeans",
                price: 600,
                image1: "images/jeans-4.jpeg",
               
            },
            {
                name: "jeans",
                price: 500,
                image1: "images/jeans-3.jpeg",
               
            },
            {
                name: "dry fruits",
                price: 200,
                image1: "images/frt4.jpeg",
                
            },
            {
                name: "sandles",
                price: 600,
                image1: "images/slipper3.jpeg",
        
            },
        ]
    },

    "beauty": {
        title: "Beauty Products",
        name: "Beauty Product",
        price: 299,
        products: [
            {
                name: "Beauty Product 1",
                price: 299,
                image1: "images/beauty1.jpeg",
                
            },
            {
                name: "Beauty Product 2",
                price: 399,
                image1: "images/beauty1-2.jpeg",
               
            },
            {
                name: "Beauty Product 3",
                price: 499,
                image1: "images/beauty1-3.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 376,
                image1: "images/beauty1-4.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 456,
                image1: "images/beauty1-5.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 167,
                image1: "images/beauty1-6.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 567,
                image1: "images/beauty1-7.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 308,
                image1: "images/beauty1-8.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 543,
                image1: "images/beauty1-9.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 307,
                image1: "images/beauty1-10.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 599,
                image1: "images/beauty1-11.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 479,
                image1: "images/beauty1-12.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 359,
                image1: "images/beauty1-13.jpeg",
            }
        ]
    },

    "jeans": {
        title: "Jeans Collection",
        name: "Jeans",
        price: 799,
        products: [
            {
                name: "Mens type",
                price: 499,
                image1: "images/jeans-1.jpeg",
                
            },
            {
                name: "jeans",
                price: 399,
                image1: "images/jeans-2.jpeg",
               
            },
            {
                name: "Beauty Product 3",
                price: 499,
                image1: "images/jeans-3.jpeg",
            },
            {
                name: "jeans",
                price: 376,
                image1: "images/jeans-4.jpeg",
            },
            {
                name: "jeans",
                price: 456,
                image1: "images/jeans-1.jpeg",
            },
            {
                name: "jeans",
                price: 167,
                image1: "images/jeans-4.jpeg",
            },
            {
                name: "mens wear",
                price: 567,
                image1: "images/jeans-3.jpeg",
            },
            {
                name: "mens type",
                price: 308,
                image1: "images/jeans-2.jpeg",
            },
            {
                name: "jeans",
                price: 543,
                image1: "images/jeans-1.jpeg",
            },
            {
                name: "mens wear",
                price: 307,
                image1: "images/jeans-2.jpeg",
            },
            {
                name: "mens wear",
                price: 599,
                image1: "images/jeans-1.jpeg",
            },
            {
                name: "jeans",
                price: 479,
                image1: "images/jeans-3.jpeg",
            },
            {
                name: "jeans",
                price: 359,
                image1: "images/jeans-4.jpeg",
            }
        ]
    },

    "laptops-1": {
        title: "laptops Products",
        name: "laptops Product",
        price: 999,
        products: [
            {
                name: "lenovo",
                price: 49999,
                image1: "images/laptop-1.jpeg",
                
            },
            {
                name: "hp",
                price: 56399,
                image1: "images/laptop-2.jpeg",
               
            },
            {
                name: "dell",
                price: 40499,
                image1: "images/laptop-3.jpeg",
            },
            {
                name: "dell",
                price: 45376,
                image1: "images/laptop-4.jpeg",
            },
            {
                name: "hp",
                price: 67456,
                image1: "images/laptop-5.jpeg",
            },
            {
                name: "dell",
                price: 54167,
                image1: "images/laptop-6.jpeg",
            },
            {
                name: "hp",
                price: 56000,
                image1: "images/laptop-7.jpeg",
            },
            {
                name: "dell",
                price: 30000,
                image1: "images/laptop-8.jpeg",
            },
            {
                name: "dell",
                price: 54300,
                image1: "images/laptop-1.jpeg",
            },
            {
                name: "lenovo",
                price: 30700,
                image1: "images/laptop-1.jpeg",
            },
            {
                name: "dell",
                price: 59900,
                image1: "images/laptop-4.jpeg",
            },
            {
                name: "lenovo",
                price: 47900,
                image1: "images/laptop-2.jpeg",
            },
            {
                name: "hp",
                price: 35900,
                image1: "images/laptop-3.jpeg",
            },
        ]
    },
    "laptops-2": {
        title: "laptop Products",
        name: "laptop Product",
        price: 999,
        products: [
            {
                name: "lenovo",
                price: 49900,
                image1: "images/laptop-1.jpeg",
                
            },
            {
                name: "lenovo",
                price: 39900,
                image1: "images/laptop-2.jpeg",
               
            },
            {
                name: "hp",
                price: 49900,
                image1: "images/laptop-3.jpeg",
            },
            {
                name: "hp",
                price: 37600,
                image1: "images/laptop-4.jpeg",
            },
            {
                name: "dell",
                price: 45600,
                image1: "images/laptop-5.jpeg",
            },
            {
                name: "dell",
                price: 16700,
                image1: "images/laptop-6.jpeg",
            },
            {
                name: "hp",
                price: 56700,
                image1: "images/laptop-7.jpeg",
            },
            {
                name: "hp",
                price: 30800,
                image1: "images/laptop-8.jpeg",
            },
            {
                name: "dell",
                price: 54300,
                image1: "images/laptop-7.jpeg",
            },
            {
                name: "lenovo",
                price: 30790,
                image1: "images/laptop-6.jpeg",
            },
            {
                name: "lenovo",
                price: 59900,
                image1: "images/laptop-5.jpeg",
            },
            {
                name: "hp",
                price: 47900,
                image1: "images/laptop-4.jpeg",
            },
            {
                name: "hp",
                price: 35900,
                image1: "images/laptop-3.jpeg",
            }
        ]
    },
    "laptops-3": {
        title: "Fashion Products",
        name: "Fashion Product",
        price: 999,
        products: [
            {
                name: "hp",
                price: 49500,
                image1: "images/laptop-2.jpeg",
                
            },
            {
                name: "hp",
                price: 39900,
                image1: "images/laptop-1.jpeg",
               
            },
            {
                name: "dell",
                price: 49990,
                image1: "images/laptop-2.jpeg",
            },
            {
                name: "dell",
                price: 37600,
                image1: "images/laptop-3.jpeg",
            },
            {
                name: "hp",
                price: 45600,
                image1: "images/laptop-5.jpeg",
            },
            {
                name: "lenovo",
                price: 16700,
                image1: "images/laptop-6.jpeg",
            },
            {
                name: "lenovo",
                price: 56720,
                image1: "images/laptop-7.jpeg",
            },
            {
                name: "hp",
                price: 30800,
                image1: "images/laptop-8.jpeg",
            },
            {
                name: "dell",
                price: 54300,
                image1: "images/laptop-1.jpeg",
            },
            {
                name: "lenovo",
                price: 30700,
                image1: "images/laptop-2.jpeg",
            },
            {
                name: "dell",
                price: 59940,
                image1: "images/laptop-5.jpeg",
            },
            {
                name: "hp",
                price: 47900,
                image1: "images/laptop-2.jpeg",
            },
            {
                name: "hp",
                price: 35900,
                image1: "images/laptop-3.jpeg",
            }
        ]
    },

    "laptops-4": {
        title: "Recommended Products",
        name: "Recommended Product",
        price: 299,
        products: [
            {
                name: "hp",
                price: 49900,
                image1: "images/laptop-1.jpeg",
                
            },
            {
                name: "dell",
                price: 39900,
                image1: "images/laptop-2.jpeg",
               
            },
            {
                name: "hp",
                price: 49900,
                image1: "images/laptop-3.jpeg",
            },
            {
                name: "dell",
                price: 37600,
                image1: "images/laptop-4.jpeg",
            },
            {
                name: "hp",
                price: 45600,
                image1: "images/laptop-5.jpeg",
            },
            {
                name: "lenovo",
                price: 16700,
                image1: "images/laptop-6.jpeg",
            },
            {
                name: "dell",
                price: 56700,
                image1: "images/laptop-7.jpeg",
            },
            {
               name: "hp",
                price: 30800,
                image1: "images/laptop-8.jpeg",
            },
            {
                name: "lenovo",
                price: 54300,
                image1: "images/laptop-6.jpeg",
            },
            {
                name: "dell",
                price: 30700,
                image1: "images/laptop-1.jpeg",
            },
            {
                name: "dell",
                price: 59900,
                image1: "images/laptop-1.jpeg",
            },
            {
                name: "hp",
                price: 47900,
                image1: "images/laptop-2.jpeg",
            },
            {
                name: "lenovo",
                price: 35900,
                image1: "images/laptop-3.jpeg",
            }
        ]
    },

    "paste": {
        title: "Personal Care Products",
        name: "Personal Care Product",
        price: 199,
       products: [
            {
                name: "colgate",
                price: 499,
                image1: "images/paste-1.jpeg",
                
            },
            {
                name: "products 2",
                price: 399,
                image1: "images/paste-2.jpeg",
               
            },
            {
                name: " Product 3",
                price: 499,
                image1: "images/paste-3.jpeg",
            },
            {
                name: " Product 3",
                price: 376,
                image1: "images/paste-4.jpeg",
            },
            {
                name: " Product 3",
                price: 456,
                image1: "images/paste-5.jpeg",
            },
            {
                name: " Product 3",
                price: 167,
                image1: "images/paste-6.jpeg",
            },
            {
                name: " Product 3",
                price: 567,
                image1: "images/paste-7.jpeg",
            },
            {
                name: " Product 3",
                price: 308,
                image1: "images/paste-1.jpeg",
            },
            {
                name: " Product 3",
                price: 543,
                image1: "images/paste-3.jpeg",
            },
            {
                name: " Product 3",
                price: 307,
                image1: "images/paste-1.jpeg",
            },
            {
                name: " Product 3",
                price: 599,
                image1: "images/paste-5.jpeg",
            },
            {
                name: " Product 3",
                price: 479,
                image1: "images/paste-6.jpeg",
            },
            {
                name: " Product 3",
                price: 359,
                image1: "images/paste-3.jpeg",
            }
        ]
    },

    

    "under99": {
        title: "Products Under ₹99",
        name: "Budget Product",
        price: 79,
        products: [
            {
                name: "Mens type",
                price: 499,
                image1: "images/frt2.jpeg",
                
            },
            {
                name: "dry fruits",
                price: 399,
                image1: "images/frt4.jpeg",
               
            },
            {
                name: "sandles",
                price: 499,
                image1: "images/slipper1.jpeg",
            },
            {
                name: "dry fruits",
                price: 376,
                image1: "images/frt4.jpeg",
            },
            {
                name: "kurti",
                price: 456,
                image1: "images/kurti1.jpeg",
            },
            {
                name: "dry fruits",
                price: 167,
                image1: "images/frt1.jpeg",
            },
            {
                name: "pillow",
                price: 567,
                image1: "images/bed2.jpeg",
            },
            {
                name: "dry fruits",
                price: 308,
                image1: "images/frt3.jpeg",
            },
            {
                name: "sandles",
                price: 543,
                image1: "images/slipper4.jpeg",
            },
            {
                name: "pillow",
                price: 307,
                image1: "images/bed1.jpeg",
            },
            {
                name: "Beauty Product ",
                price: 599,
                image1: "images/beauty1-3.jpeg",
            },
            {
                name: "Beauty Product ",
                price: 479,
                image1: "images/beauty1-5.jpeg",
            },
            {
                name: "Beauty Product ",
                price: 359,
                image1: "images/beauty1-2.jpeg",
            }
        ]
    },
   

    "under299": {
        title: "Products Under ₹299",
        name: "Budget Product",
        price: 249,
     products: [
            {
                name: "pillow",
                price: 499,
                image1: "images/bed6.jpeg",
                
            },
            {
                name: "dry fruits",
                price: 399,
                image1: "images/frt4.jpeg",
               
            },
            {
                name: "Beauty Product ",
                price: 499,
                image1: "images/beauty1-5.jpeg",
            },
            {
                name: "dry fruits",
                price: 376,
                image1: "images/frt1.jpeg",
            },
            {
                name: "dry fruits",
                price: 456,
                image1: "images/frt4.jpeg",
            },
            {
                name: "dry fruits",
                price: 167,
                image1: "images/frt1.jpeg",
            },
            {
                name: "sandles",
                price: 567,
                image1: "images/slipper1.jpeg",
            },
            {
                name: "dry fruits",
                price: 308,
                image1: "images/frt3.jpeg",
            },
            {
                name: "sandles",
                price: 543,
                image1: "images/slipper2.jpeg",
            },
            {
                name: "pillow",
                price: 307,
                image1: "images/bed1.jpeg",
            },
            {
                name: "Beauty Product ",
                price: 599,
                image1: "images/beauty1-3.jpeg",
            },
            {
                name: "Beauty Product ",
                price: 479,
                image1: "images/beauty1-5.jpeg",
            },
            {
                name: "Beauty Product ",
                price: 359,
                image1: "images/beauty1-2.jpeg",
            }
        ]
    },

    "under199": {
        title: "Products Under ₹499",
        name: "Budget Product",
        price: 399,
       products: [
            {
                name: "pillow",
                price: 499,
                image1: "images/bed6.jpeg",
                
            },
            {
                name: "kurti",
                price: 399,
                image1: "images/kurti3.jpeg",
               
            },
            {
                name: "Beauty Product ",
                price: 499,
                image1: "images/beauty1-5.jpeg",
            },
            {
                name: "kurti",
                price: 376,
                image1: "images/kurti3.jpeg",
            },
            {
                name: "kurti",
                price: 456,
                image1: "images/kurti1.jpeg",
            },
            {
                name: "dry fruits",
                price: 167,
                image1: "images/frt1.jpeg",
            },
            {
                name: "pillow",
                price: 567,
                image1: "images/bed2.jpeg",
            },
            {
                name: "dry fruits",
                price: 308,
                image1: "images/frt3.jpeg",
            },
            {
                name: "pillow",
                price: 543,
                image1: "images/bed1.jpeg",
            },
            {
                name: "bed",
                price: 307,
                image1: "images/bed1.jpeg",
            },
            {
                name: "Beauty Product ",
                price: 599,
                image1: "images/beauty1-3.jpeg",
            },
            {
                name: "Beauty Product ",
                price: 479,
                image1: "images/beauty1-5.jpeg",
            },
            {
                name: "Beauty Product",
                price: 359,
                image1: "images/beauty1-2.jpeg",
            }
        ]
    },

    "under499": {
        title: "Products Under ₹499",
        name: "Budget Product",
        price: 399,
       products: [
            {
                name: "pillow",
                price: 499,
                image1: "images/bed6.jpeg",
                
            },
            {
                name: "kurti",
                price: 399,
                image1: "images/kurti3.jpeg",
               
            },
            {
                name: "Beauty Product",
                price: 499,
                image1: "images/beauty1-5.jpeg",
            },
            {
                name: "kurti",
                price: 376,
                image1: "images/kurti3.jpeg",
            },
            {
                name: "kurti",
                price: 456,
                image1: "images/kurti1.jpeg",
            },
            {
                name: "dry fruits",
                price: 167,
                image1: "images/frt1.jpeg",
            },
            {
                name: "pillow",
                price: 567,
                image1: "images/bed2.jpeg",
            },
            {
                name: "dry fruits",
                price: 308,
                image1: "images/frt3.jpeg",
            },
            {
                name: "sandles",
                price: 543,
                image1: "images/slipper2.jpeg",
            },
            {
                name: "pillow",
                price: 307,
                image1: "images/bed1.jpeg",
            },
            {
                name: "Beauty Product ",
                price: 599,
                image1: "images/beauty1-3.jpeg",
            },
            {
                name: "Beauty Product ",
                price: 479,
                image1: "images/beauty1-5.jpeg",
            },
            {
                name: "Beauty Product ",
                price: 359,
                image1: "images/beauty1-2.jpeg",
            }
        ]
    },

    "fashion1": {
        title: "Fashion Collection 1",
        name: "Fashion Product",
        price: 599,
        products: [
            {
                name: "sandles",
                price: 499,
                image1: "images/slipper1.jpeg",
                
            },
            {
                name: "sandles",
                price: 399,
                image1: "images/slipper2.jpeg",
               
            },
            {
                name: "slippers",
                price: 499,
                image1: "images/slipper3.jpeg",
            },
            {
                name: "slippers",
                price: 376,
                image1: "images/slipper4.jpeg",
            },
            {
                name: "shoes",
                price: 456,
                image1: "images/slipper5.jpeg",
            },
            {
                name: "slippers",
                price: 167,
                image1: "images/slipper6.jpeg",
            },
            {
                name: "slippers",
                price: 567,
                image1: "images/slipper7.jpeg",
            },
            {
                name: "sandles",
                price: 308,
                image1: "images/slipper8.jpeg",
            },
            {
                name: "sandles",
                price: 543,
                image1: "images/slipper3.jpeg",
            },
            {
                name: "sandles",
                price: 307,
                image1: "images/slipper5.jpeg",
            },
            {
                name: "slippers",
                price: 599,
                image1: "images/slipper6.jpeg",
            },
            {
                name: "shoes",
                price: 479,
                image1: "images/slipper1.jpeg",
            },
            {
                name: "shoes3",
                price: 359,
                image1: "images/slipper8.jpeg",
            }
        ]
    },
    "fashion2": {
        title: "Fashion Products",
        name: "Fashion Product",
        price: 999,
        products: [
            {
                name: "Mens type",
                price: 499,
                image1: "images/kurti1.jpeg",
                
            },
            {
                name: " Product 2",
                price: 399,
                image1: "images/kurti2.jpeg",
               
            },
            {
                name: " Product 3",
                price: 499,
                image1: "images/kurti3.jpeg",
            },
            {
                name: " kurti",
                price: 376,
                image1: "images/kurti4.jpeg",
            },
            {
                name: "kurti",
                price: 456,
                image1: "images/kurti5.jpeg",
            },
            {
                name: "shirt",
                price: 167,
                image1: "images/kurti6.jpeg",
            },
            {
                name: " shirt",
                price: 567,
                image1: "images/kurti1.jpeg",
            },
            {
                name: " kurti",
                price: 308,
                image1: "images/kurti2.jpeg",
            },
            {
                name: "shirt",
                price: 543,
                image1: "images/kurti3.jpeg",
            },
            {
                name: " kurti",
                price: 307,
                image1: "images/kurti4.jpeg",
            },
            {
                name: " kurti",
                price: 599,
                image1: "images/kurti3.jpeg",
            },
            {
                name: "shirt",
                price: 479,
                image1: "images/kurti1.jpeg",
            },
            {
                name: "kurti",
                price: 359,
                image1: "images/kurti2.jpeg",
            }
        ]
    },
    "fashion3": {
        title: "Fashion Products",
        name: "Fashion Product",
        price: 999,
        products: [
            {
                name: "dry fruits",
                price: 499,
                image1: "images/frt1.jpeg",
                
            },
            {
                name: "dry fruits",
                price: 399,
                image1: "images/frt2.jpeg",
               
            },
            {
                name: "dry fruits",
                price: 499,
                image1: "images/frt3.jpeg",
            },
            {
                name: "dry fruits",
                price: 376,
                image1: "images/frt4.jpeg",
            },
            {
                name: "dry fruits",
                price: 456,
                image1: "images/frt4.jpeg",
            },
            {
                name: "dry fruits",
                price: 167,
                image1: "images/frt3.jpeg",
            },
            {
                name: "dry fruits",
                price: 567,
                image1: "images/frt3.jpeg",
            },
            {
                name: "dry fruits",
                price: 308,
                image1: "images/frt2.jpeg",
            },
            {
                name: "dry fruits",
                price: 543,
                image1: "images/frt1.jpeg",
            },
            {
                name: "dry fruits",
                price: 307,
                image1: "images/frt1.jpeg",
            },
            {
                name: "dry fruits",
                price: 599,
                image1: "images/frt4.jpeg",
            },
            {
                name: "dry fruits",
                price: 479,
                image1: "images/frt2.jpeg",
            },
            {
                name: "dry fruits",
                price: 359,
                image1: "images/frt1.jpeg",
            }
        ]
    },

    "fashion4": {
        title: "Fashion Collection 2",
        name: "Fashion Product",
        price: 799,
       products: [
            {
                name: "pillow",
                price: 499,
                image1: "images/bed1.jpeg",
                
            },
            {
                name: "bed",
                price: 399,
                image1: "images/bed2.jpeg",
               
            },
            {
                name: "Bed",
                price: 499,
                image1: "images/bed3.jpeg",
            },
            {
                name: "Bed",
                price: 376,
                image1: "images/bed4.jpeg",
            },
            {
                name: "Bed",
                price: 456,
                image1: "images/bed5.jpeg",
            },
            {
                name: "pillow",
                price: 167,
                image1: "images/bed6.jpeg",
            },
            {
                name: "pillow",
                price: 567,
                image1: "images/bed5.jpeg",
            },
            {
                name: "pillow",
                price: 308,
                image1: "images/bed4.jpeg",
            },
            {
                name: "bed",
                price: 543,
                image1: "images/bed3.jpeg",
            },
            {
                name: "bed",
                price: 307,
                image1: "images/bed2.jpeg",
            },
            {
                name: "pillow",
                price: 599,
                image1: "images/bed1.jpeg",
            },
            {
                name: "pillow",
                price: 479,
                image1: "images/bed4.jpeg",
            },
            {
                name: "Bed",
                price: 359,
                image1: "images/bed6.jpeg",
            }
        ]
    },
    "temple1": {
        title: "Fashion Products",
        name: "Fashion Product",
        price: 999,
        products: [
            {
                name: "lehanga",
                price: 499,
                image1: "images/dress1.jpeg",
                
            },
            {
                name: "dress",
                price: 399,
                image1: "images/dress2.jpeg",
               
            },
            {
                name: "dress",
                price: 499,
                image1: "images/dress3.jpeg",
            },
            {
                name: "lehanga",
                price: 376,
                image1: "images/dress4.jpeg",
            },
            {
                name: "dress",
                price: 456,
                image1: "images/dress5.jpeg",
            },
            {
                name: "dress",
                price: 167,
                image1: "images/dress6.jpeg",
            },
            {
                name: "lehanga",
                price: 567,
                image1: "images/dress7.jpeg",
            },
            {
                name: "lehanga",
                price: 308,
                image1: "images/dress8.jpeg",
            },
            {
                name: "lehanga",
                price: 543,
                image1: "images/dress1.jpeg",
            },
            {
                name: "dress",
                price: 307,
                image1: "images/dress10.jpeg",
            },
            {
                name: "dress",
                price: 599,
                image1: "images/dress1.jpeg",
            },
            {
                name: "lehanga",
                price: 479,
                image1: "images/dress2.jpeg",
            },
            {
                name: "dress",
                price: 359,
                image1: "images/dress3.jpeg",
            }
        ]
    },
    "temple2": {
        title: "Fashion Products",
        name: "Fashion Product",
        price: 999,
        products: [
            {
                name: "beauty",
                price: 499,
                image1: "images/beauty.jpeg",
                
            },
            {
                name: "Beauty Product 2",
                price: 399,
                image1: "images/beauty1-2.jpeg",
               
            },
            {
                name: "Beauty Product 3",
                price: 499,
                image1: "images/beauty1-3.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 376,
                image1: "images/beauty1-4.jpeg",
            },
            {
                name: "Beauty Product 4",
                price: 456,
                image1: "images/beauty1-5.jpeg",
            },
            {
                name: "Beauty Product",
                price: 167,
                image1: "images/beauty1-6.jpeg",
            },
            {
                name: "Beauty Product ",
                price: 567,
                image1: "images/beauty1-7.jpeg",
            },
            {
                name: "Beauty Product ",
                price: 308,
                image1: "images/beauty1-8.jpeg",
            },
            {
                name: "Beauty Product ",
                price: 543,
                image1: "images/beauty1-9.jpeg",
            },
            {
                name: "Beauty Product ",
                price: 307,
                image1: "images/beauty1-10.jpeg",
            },
            {
                name: "Beauty Product ",
                price: 599,
                image1: "images/beauty1-11.jpeg",
            },
            {
                name: "Beauty Product ",
                price: 479,
                image1: "images/beauty1-12.jpeg",
            },
            {
                name: "Beauty Product ",
                price: 359,
                image1: "images/beauty1-13.jpeg",
            }
        ]
    },

    "temple3": {
        title: "Fashion Collection 3",
        name: "Fashion Product",
        price: 999,
       products: [
            {
                name: "dress",
                price: 499,
                image1: "images/dress10.jpeg",
                
            },
            {
                name: "dress",
                price: 399,
                image1: "images/dress2.jpeg",
               
            },
            {
                name: "kurti",
                price: 499,
                image1: "images/dress1.jpeg",
            },
            {
                name: "kurti",
                price: 376,
                image1: "images/dress5.jpeg",
            },
            {
                name: "kurti",
                price: 456,
                image1: "images/dress4.jpeg",
            },
            {
                name: "dress",
                price: 167,
                image1: "images/dress6.jpeg",
            },
            {
                name: "dress",
                price: 567,
                image1: "images/dress9.jpeg",
            },
            {
                name: "lehanga",
                price: 308,
                image1: "images/dress7.jpeg",
            },
            {
                name: "lehanga",
                price: 543,
                image1: "images/dress10.jpeg",
            },
            {
                name: "lehanga",
                price: 307,
                image1: "images/dress1.jpeg",
            },
            {
                name: "dress",
                price: 599,
                image1: "images/dress4.jpeg",
            },
            {
                name: "dress",
                price: 479,
                image1: "images/dress7.jpeg",
            },
            {
                name: "dress",
                price: 359,
                image1: "images/dress2.jpeg",
            }
        ]
    },
    "temple4": {
        title: "Fashion Products",
        name: "Fashion Product",
        price: 999,
        products: [
            {
                name: "deepam",
                price: 499,
                image1: "images/deepam1.jpeg",
                
            },
            {
                name: "pooja items",
                price: 399,
                image1: "images/deepam2.jpeg",
               
            },
            {
                name: "pooja items",
                price: 499,
                image1: "images/deepam3.jpeg",
            },
            {
                name: "pooja item",
                price: 376,
                image1: "images/deepam4.jpeg",
            },
            {
                name: "pooja yitem",
                price: 456,
                image1: "images/deepam5.jpeg",
            },
            {
                name: "pooja item",
                price: 167,
                image1: "images/deepam3.jpeg",
            },
            {
                name: "pooja item",
                price: 567,
                image1: "images/deepam2.jpeg",
            },
            {
                name: "deepam",
                price: 308,
                image1: "images/deepam1.jpeg",
            },
            {
                name: "deepam",
                price: 543,
                image1: "images/deepam5.jpeg",
            },
            {
                name: "pooja items",
                price: 307,
                image1: "images/deepam3.jpeg",
            },
            {
                name: "pooja items",
                price: 599,
                image1: "images/deepam2.jpeg",
            },
            {
                name: "pooja items",
                price: 479,
                image1: "images/deepam1.jpeg",
            },
            {
                name: "deepam",
                price: 359,
                image1: "images/deepam5.jpeg",
            }
        ]
    },
    "book1": {
        title: "Fashion Products",
        name: "Fashion Product",
        price: 999,
        products: [
            {
                name: "book",
                price: 499,
                image1: "images/book1.jpeg",
                
            },
            {
                name: "story book",
                price: 399,
                image1: "images/book2.jpeg",
               
            },
            {
                name: "story book",
                price: 499,
                image1: "images/book3.jpeg",
            },
            {
                name: "story book",
                price: 376,
                image1: "images/book4.jpeg",
            },
            {
                name: "story book",
                price: 456,
                image1: "images/book5.jpeg",
            },
            {
                name: "story book",
                price: 167,
                image1: "images/book6.jpeg",
            },
            {
                name: "story book",
                price: 567,
                image1: "images/book4.jpeg",
            },
            {
                name: "story book",
                price: 308,
                image1: "images/book5.jpeg",
            },
            {
                name: "story book",
                price: 543,
                image1: "images/book1.jpeg",
            },
            {
                name: "story book",
                price: 307,
                image1: "images/book6.jpeg",
            },
            {
                name:"story book",
                price: 599,
                image1: "images/book1.jpeg",
            },
            {
                name: "story book",
                price: 479,
                image1: "images/book2.jpeg",
            },
            {
                name: "story book",
                price: 359,
                image1: "images/book3.jpeg",
            }
        ]
    },

    "book2": {
        title: "Fashion Collection 4",
        name: "Fashion Product",
        price: 1199,
        products: [
            {
                name: "book",
                price: 499,
                image1: "images/book2.jpeg",
                
            },
            {
                name: "story book",
                price: 399,
                image1: "images/book1.jpeg",
               
            },
            {
                name:"story book",
                price: 499,
                image1: "images/book1.jpeg",
            },
            {
                name: "story book",
                price: 376,
                image1: "images/book5.jpeg",
            },
            {
                name: "story book",
                price: 456,
                image1: "images/book3.jpeg",
            },
            {
                name: "story book",
                price: 167,
                image1: "images/book4.jpeg",
            },
            {
                name:"story book",
                price: 567,
                image1: "images/book1.jpeg",
            },
            {
                name: "story book",
                price: 308,
                image1: "images/book2.jpeg",
            },
            {
                name: "story book",
                price: 543,
                image1: "images/book5.jpeg",
            },
            {
                name:"story book",
                price: 307,
                image1: "images/book1.jpeg",
            },
            {
                name: "story book",
                price: 599,
                image1: "images/book1.jpeg",
            },
            {
                name: "story book",
                price: 479,
                image1: "images/book2.jpeg",
            },
            {
                name:"story book",
                price: 359,
                image1: "images/book3.jpeg",
            }
        ]
    },
    "book3": {
        title: "Fashion Products",
        name: "Fashion Product",
        price: 999,
         products: [
            {
                name: "book",
                price: 499,
                image1: "images/book1.jpeg",
                
            },
            {
                name: "story book",
                price: 399,
                image1: "images/book2.jpeg",
               
            },
            {
                name: "story book",
                price: 499,
                image1: "images/book3.jpeg",
            },
            {
                name: "story book",
                price: 376,
                image1: "images/book4.jpeg",
            },
            {
                name: "story book",
                price: 456,
                image1: "images/book5.jpeg",
            },
            {
                name: "story book",
                price: 167,
                image1: "images/book6.jpeg",
            },
            {
                name: "story book",
                price: 567,
                image1: "images/book4.jpeg",
            },
            {
                name:"story book",
                price: 308,
                image1: "images/book5.jpeg",
            },
            {
                name:"story book",
                price: 543,
                image1: "images/book1.jpeg",
            },
            {
                name: "story book",
                price: 307,
                image1: "images/book6.jpeg",
            },
            {
                name: "story book",
                price: 599,
                image1: "images/book1.jpeg",
            },
            {
                name: "story book",
                price: 479,
                image1: "images/book2.jpeg",
            },
            {
                name: "story book",
                price: 359,
                image1: "images/book3.jpeg",
            }
        ]
    },
    "book4": {
        title: "Fashion Products",
        name: "Fashion Product",
        price: 999,
        products: [
            {
                name:"story book",
                price: 499,
                image1: "images/book2.jpeg",
                
            },
            {
                name:"story book",
                price: 399,
                image1: "images/book1.jpeg",
               
            },
            {
                name:"story book",
                price: 499,
                image1: "images/book1.jpeg",
            },
            {
                name: "story book",
                price: 376,
                image1: "images/book5.jpeg",
            },
            {
                name:"story book",
                price: 456,
                image1: "images/book3.jpeg",
            },
            {
                name: "story book",
                price: 167,
                image1: "images/book4.jpeg",
            },
            {
                name: "story book",
                price: 567,
                image1: "images/book1.jpeg",
            },
            {
                name: "story book",
                price: 308,
                image1: "images/book2.jpeg",
            },
            {
                name:"story book",
                price: 543,
                image1: "images/book5.jpeg",
            },
            {
                name: "story book",
                price: 307,
                image1: "images/book1.jpeg",
            },
            {
                name:"story book",
                price: 599,
                image1: "images/book1.jpeg",
            },
            {
                name: "story book",
                price: 479,
                image1: "images/book2.jpeg",
            },
            {
                name: "story book",
                price: 359,
                image1: "images/book3.jpeg",
            }
        ]
    },

    "camera1": {
        title: "camera",
        name: "camera",
        price: 499,
       products: [
            {
                name: "camera",
                price: 4999,
                image1: "images/camera1.jpeg",
                
            },
            {
                name: "camera",
                price: 3099,
                image1: "images/camera2.jpeg",
               
            },
            {
                name: "camera",
                price: 4099,
                image1: "images/camera3.jpeg",
            },
            {
                name:  "camera",
                price: 3276,
                image1: "images/camera4.jpeg",
            },
            {
                name:  "camera",
                price: 4956,
                image1: "images/camera5.jpeg",
            },
            {
                name:  "camera",
                price: 1067,
                image1: "images/camera6.jpeg",
            },
            {
                name:  "camera",
                price: 5067,
                image1: "images/camera7.jpeg",
            },
            {
                name:  "camera",
                price: 3008,
                image1: "images/camera8.jpeg",
            },
            {
                name:  "camera",
                price: 5430,
                image1: "images/camera1.jpeg",
            },
            {
                name:  "camera",
                price: 3070,
                image1: "images/camera5.jpeg",
            },
            {
                name:  "camera",
                price: 5999,
                image1: "images/camera7.jpeg",
            },
            {
                name:  "camera",
                price: 4790,
                image1: "images/camera3.jpeg",
            },
            {
                name:  "camera",
                price: 3590,
                image1: "images/camera8.jpeg",
            }
        ]
    },
    "camera2": {
        title: "camera",
        name: "camera",
        price: 999,
        products: [
            {
                name: "camera",
                price: 4999,
                image1: "images/camera6.jpeg",
                
            },
            {
                name: "camera",
                price: 3990,
                image1: "images/camera8.jpeg",
               
            },
            {
                name: "camera",
                price: 4990,
                image1: "images/camera3.jpeg",
            },
            {
                name: "camera",
                price: 3760,
                image1: "images/camera5.jpeg",
            },
            {
                name: "camera",
                price: 4560,
                image1: "images/camera3.jpeg",
            },
            {
                name: "camera",
                price: 1670,
                image1: "images/camera2.jpeg",
            },
            {
                name: "camera",
                price: 5670,
                image1: "images/camera1.jpeg",
            },
            {
                name: "camera3",
                price: 3080,
                image1: "images/camera6.jpeg",
            },
            {
                name: "camera",
                price: 5430,
                image1: "images/camera8.jpeg",
            },
            {
                name: "camera",
                price: 3070,
                image1: "images/camera6.jpeg",
            },
            {
                name: "camera",
                price: 5990,
                image1: "images/camera5.jpeg",
            },
            {
                name: "camera",
                price: 4790,
                image1: "images/camera4.jpeg",
            },
            {
                name: "camera",
                price: 3590,
                image1: "images/camera8.jpeg",
            }
        ]
    },
    "camera3": {
        title: "camera",
        name: "camera",
        price: 999,
               products: [
            {
                name: "camera",
                price: 4999,
                image1: "images/camera1.jpeg",
                
            },
            {
                name: "camera",
                price: 3099,
                image1: "images/camera2.jpeg",
               
            },
            {
                name: "camera",
                price: 4099,
                image1: "images/camera3.jpeg",
            },
            {
                name:  "camera",
                price: 3276,
                image1: "images/camera4.jpeg",
            },
            {
                name:  "camera",
                price: 4956,
                image1: "images/camera5.jpeg",
            },
            {
                name:  "camera",
                price: 1067,
                image1: "images/camera6.jpeg",
            },
            {
                name:  "camera",
                price: 5067,
                image1: "images/camera7.jpeg",
            },
            {
                name:  "camera",
                price: 3008,
                image1: "images/camera8.jpeg",
            },
            {
                name:  "camera",
                price: 5430,
                image1: "images/camera1.jpeg",
            },
            {
                name:  "camera",
                price: 3070,
                image1: "images/camera5.jpeg",
            },
            {
                name:  "camera",
                price: 5999,
                image1: "images/camera7.jpeg",
            },
            {
                name:  "camera",
                price: 4790,
                image1: "images/camera3.jpeg",
            },
            {
                name:  "camera",
                price: 3590,
                image1: "images/camera8.jpeg",
            }
        ]
    },

    "camera4": {
        title: "camera",
        name: "camera",
        price: 699,
               products: [
            {
                name: "camera",
                price: 4999,
                image1: "images/camera6.jpeg",
                
            },
            {
                name: "camera",
                price: 3990,
                image1: "images/camera8.jpeg",
               
            },
            {
                name: "camera",
                price: 4990,
                image1: "images/camera3.jpeg",
            },
            {
                name: "camera",
                price: 3760,
                image1: "images/camera5.jpeg",
            },
            {
                name: "camera",
                price: 4560,
                image1: "images/camera3.jpeg",
            },
            {
                name: "camera",
                price: 1670,
                image1: "images/camera2.jpeg",
            },
            {
                name: "camera",
                price: 5670,
                image1: "images/camera1.jpeg",
            },
            {
                name: "camera3",
                price: 3080,
                image1: "images/camera6.jpeg",
            },
            {
                name: "camera",
                price: 5430,
                image1: "images/camera8.jpeg",
            },
            {
                name: "camera",
                price: 3070,
                image1: "images/camera6.jpeg",
            },
            {
                name: "camera",
                price: 5990,
                image1: "images/camera5.jpeg",
            },
            {
                name: "camera",
                price: 4790,
                image1: "images/camera4.jpeg",
            },
            {
                name: "camera",
                price: 3590,
                image1: "images/camera8.jpeg",
            }
        ]
    },
    "beauty1": {
        title: "Fashion Products",
        name: "Fashion Product",
        price: 999,
        products: [
            {
                name:"story book",
                price: 499,
                image1: "images/book2.jpeg",
                
            },
            {
                name:"story book",
                price: 399,
                image1: "images/book1.jpeg",
               
            },
            {
                name:"story book",
                price: 499,
                image1: "images/book1.jpeg",
            },
            {
                name: "story book",
                price: 376,
                image1: "images/book5.jpeg",
            },
            {
                name:"story book",
                price: 456,
                image1: "images/book3.jpeg",
            },
            {
                name: "story book",
                price: 167,
                image1: "images/book4.jpeg",
            },
            {
                name: "story book",
                price: 567,
                image1: "images/book1.jpeg",
            },
            {
                name: "story book",
                price: 308,
                image1: "images/book2.jpeg",
            },
            {
                name:"story book",
                price: 543,
                image1: "images/book5.jpeg",
            },
            {
                name: "story book",
                price: 307,
                image1: "images/book1.jpeg",
            },
            {
                name:"story book",
                price: 599,
                image1: "images/book1.jpeg",
            },
            {
                name: "story book",
                price: 479,
                image1: "images/book2.jpeg",
            },
            {
                name: "story book",
                price: 359,
                image1: "images/book3.jpeg",
            }
        ]
    },
    "beauty2": {
        title: "Fashion Products",
        name: "Fashion Product",
        price: 999,
            products: [
            {
                name: "Beauty Product 1",
                price: 299,
                image1: "images/beauty1.jpeg",
                
            },
            {
                name: "Beauty Product 2",
                price: 399,
                image1: "images/beauty1-2.jpeg",
               
            },
            {
                name: "Beauty Product 3",
                price: 499,
                image1: "images/beauty1-3.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 376,
                image1: "images/beauty1-4.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 456,
                image1: "images/beauty1-5.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 167,
                image1: "images/beauty1-6.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 567,
                image1: "images/beauty1-7.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 308,
                image1: "images/beauty1-8.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 543,
                image1: "images/beauty1-9.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 307,
                image1: "images/beauty1-10.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 599,
                image1: "images/beauty1-11.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 479,
                image1: "images/beauty1-12.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 359,
                image1: "images/beauty1-13.jpeg",
            }
        ]
    },

    "beauty3": {
        title: "beauty products",
        name: "beauty products",
        price: 899,
          products: [
            {
                name: "Beauty Product 1",
                price: 299,
                image1: "images/beauty1.jpeg",
                
            },
            {
                name: "Beauty Product 2",
                price: 399,
                image1: "images/beauty1-2.jpeg",
               
            },
            {
                name: "Beauty Product 3",
                price: 499,
                image1: "images/beauty1-3.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 376,
                image1: "images/beauty1-4.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 456,
                image1: "images/beauty1-5.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 167,
                image1: "images/beauty1-6.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 567,
                image1: "images/beauty1-7.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 308,
                image1: "images/beauty1-8.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 543,
                image1: "images/beauty1-9.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 307,
                image1: "images/beauty1-10.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 599,
                image1: "images/beauty1-11.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 479,
                image1: "images/beauty1-12.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 359,
                image1: "images/beauty1-13.jpeg",
            }
        ]
    },
    "beauty4": {
        title: "beauty Products",
        name: "beauty Product",
        price: 999,
            products: [
            {
                name: "Beauty Product 1",
                price: 299,
                image1: "images/beauty1.jpeg",
                
            },
            {
                name: "Beauty Product 2",
                price: 399,
                image1: "images/beauty1-2.jpeg",
               
            },
            {
                name: "Beauty Product 3",
                price: 499,
                image1: "images/beauty1-3.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 376,
                image1: "images/beauty1-4.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 456,
                image1: "images/beauty1-5.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 167,
                image1: "images/beauty1-6.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 567,
                image1: "images/beauty1-7.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 308,
                image1: "images/beauty1-8.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 543,
                image1: "images/beauty1-9.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 307,
                image1: "images/beauty1-10.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 599,
                image1: "images/beauty1-11.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 479,
                image1: "images/beauty1-12.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 359,
                image1: "images/beauty1-13.jpeg",
            }
        ]
    },
    "toy1": {
        title: "toys Products",
        name: "toys Product",
        price: 999,
  products: [
            {
                name:"story book",
                price: 499,
                image1: "images/book2.jpeg",
                
            },
            {
                name:"story book",
                price: 399,
                image1: "images/book1.jpeg",
               
            },
            {
                name:"story book",
                price: 499,
                image1: "images/book1.jpeg",
            },
            {
                name: "story book",
                price: 376,
                image1: "images/book5.jpeg",
            },
            {
                name:"story book",
                price: 456,
                image1: "images/book3.jpeg",
            },
            {
                name: "story book",
                price: 167,
                image1: "images/book4.jpeg",
            },
            {
                name: "story book",
                price: 567,
                image1: "images/book1.jpeg",
            },
            {
                name: "story book",
                price: 308,
                image1: "images/book2.jpeg",
            },
            {
                name:"story book",
                price: 543,
                image1: "images/book5.jpeg",
            },
            {
                name: "story book",
                price: 307,
                image1: "images/book1.jpeg",
            },
            {
                name:"story book",
                price: 599,
                image1: "images/book1.jpeg",
            },
            {
                name: "story book",
                price: 479,
                image1: "images/book2.jpeg",
            },
            {
                name: "story book",
                price: 359,
                image1: "images/book3.jpeg",
            }
        ]
    },

    "toy2": {
        title: "camera",
        name: "camera",
        price: 999,
         products: [
            {
                name: "camera",
                price: 4999,
                image1: "images/camera6.jpeg",
                
            },
            {
                name: "camera",
                price: 3990,
                image1: "images/camera8.jpeg",
               
            },
            {
                name: "camera",
                price: 4990,
                image1: "images/camera3.jpeg",
            },
            {
                name: "camera",
                price: 3760,
                image1: "images/camera5.jpeg",
            },
            {
                name: "camera",
                price: 4560,
                image1: "images/camera3.jpeg",
            },
            {
                name: "camera",
                price: 1670,
                image1: "images/camera2.jpeg",
            },
            {
                name: "camera",
                price: 5670,
                image1: "images/camera1.jpeg",
            },
            {
                name: "camera3",
                price: 3080,
                image1: "images/camera6.jpeg",
            },
            {
                name: "camera",
                price: 5430,
                image1: "images/camera8.jpeg",
            },
            {
                name: "camera",
                price: 3070,
                image1: "images/camera6.jpeg",
            },
            {
                name: "camera",
                price: 5990,
                image1: "images/camera5.jpeg",
            },
            {
                name: "camera",
                price: 4790,
                image1: "images/camera4.jpeg",
            },
            {
                name: "camera",
                price: 3590,
                image1: "images/camera8.jpeg",
            }
        ]
    },
    "toy3": {
        title: "toys Products",
        name: "toys Product",
        price: 999,
        products: [
            {
                name: "toys",
                price: 499,
                image1: "images/toys1.jpeg",
                
            },
            {
                name: "toy",
                price: 399,
                image1: "images/toys2.jpeg",
               
            },
            {
                name: "toys",
                price: 499,
                image1: "images/toys3.jpeg",
            },
            {
                name: "toys",
                price: 376,
                image1: "images/toys4.jpeg",
            },
            {
                name: "toys",
                price: 456,
                image1: "images/toys5.jpeg",
            },
            {
                name: "toys",
                price: 167,
                image1: "images/toys4.jpeg",
            },
            {
                name: "toys",
                price: 567,
                image1: "images/toys3.jpeg",
            },
            {
                name: "toys",
                price: 308,
                image1: "images/toys2.jpeg",
            },
            {
                name: "toys",
                price: 543,
                image1: "images/toys1.jpeg",
            },
            {
                name: "toys",
                price: 307,
                image1: "images/toys5.jpeg",
            },
            {
                name: "toys",
                price: 599,
                image1: "images/toys1.jpeg",
            },
            {
                name: "toys",
                price: 479,
                image1: "images/toys2.jpeg",
            },
            {
                name: "toys",
                price: 359,
                image1: "images/toys3.jpeg",
            }
        ]
    },
    "toy4": {
        title: "Fashion Products",
        name: "Fashion Product",
        price: 999,
        products: [
            {
                name: "Beauty Product 1",
                price: 299,
                image1: "images/beauty1.jpeg",
                
            },
            {
                name: "Beauty Product 2",
                price: 399,
                image1: "images/beauty1-2.jpeg",
               
            },
            {
                name: "Beauty Product 3",
                price: 499,
                image1: "images/beauty1-3.jpeg",
            },
            {
                name: "Beauty Product ",
                price: 376,
                image1: "images/beauty1-4.jpeg",
            },
            {
                name: "Beauty Product ",
                price: 456,
                image1: "images/beauty1-5.jpeg",
            },
            {
                name: "Beauty Product ",
                price: 167,
                image1: "images/beauty1-6.jpeg",
            },
            {
                name: "Beauty Product ",
                price: 567,
                image1: "images/beauty1-7.jpeg",
            },
            {
                name: "Beauty Product ",
                price: 308,
                image1: "images/beauty1-8.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 543,
                image1: "images/beauty1-9.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 307,
                image1: "images/beauty1-10.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 599,
                image1: "images/beauty1-11.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 479,
                image1: "images/beauty1-12.jpeg",
            },
            {
                name: "Beauty Product 3",
                price: 359,
                image1: "images/beauty1-13.jpeg",
            }
        ]
    },

};
const grid = document.getElementById("productGrid");
const heading = document.getElementById("heading");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

const searchFromURL = params.get("search") || "";

const allProducts = Object.entries(categoryData).flatMap(
    ([categoryKey, categoryInfo]) =>
        categoryInfo.products.map((product, index) => ({
            ...product,
            id: `${categoryKey}-${index + 1}`,
            category: categoryKey
        }))
);

const selectedCategory = categoryData[category];

function displayProducts(products) {
    grid.innerHTML = "";

    if (products.length === 0) {
        grid.innerHTML = "<p>No products found.</p>";
        return;
    }

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        const image = document.createElement("img");
        image.src = product.image1;
        image.alt = product.name;
        image.className = "product-image";
        image.onerror = function () {
            this.style.display = "none";
        };

        const details = document.createElement("div");
        details.innerHTML = `
            <h3>${product.name}</h3>
            <p class="rating">★★★★☆ 4.0</p>
            <p class="price">₹${product.price}</p>
            <p class="old-price">M.R.P. ₹${product.price + 300}</p>
            <p class="discount">Special Offer</p>
            <p>Free Delivery</p>
        `;

        const button = document.createElement("button");
        button.textContent = "Add to Cart";

        button.addEventListener("click", function () {
            const cart = JSON.parse(
                localStorage.getItem("shopkartCart") || "[]"
            );

            cart.push(product);
            localStorage.setItem("shopkartCart", JSON.stringify(cart));

            button.textContent = "Added to Cart";
            button.disabled = true;
        });

        card.appendChild(image);
        card.appendChild(details);
        card.appendChild(button);
        grid.appendChild(card);
    });
}

function searchProducts() {
    const text = searchInput.value.trim().toLowerCase();

    const filteredProducts = allProducts.filter(product =>
        product.name.toLowerCase().includes(text)
    );

    heading.textContent = text
        ? "Search Results: " + searchInput.value.trim()
        : "All Products";

    displayProducts(filteredProducts);
}

if (searchButton) {
    searchButton.addEventListener("click", searchProducts);
}

if (searchInput) {
    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            searchProducts();
        }
    });
}

if (searchFromURL) {
    heading.textContent = "Search Results: " + searchFromURL;

    displayProducts(
        allProducts.filter(product =>
            product.name.toLowerCase().includes(
                searchFromURL.toLowerCase()
            )
        )
    );
} else if (selectedCategory) {
    heading.textContent = selectedCategory.title;
    displayProducts(selectedCategory.products);
} else {
    heading.textContent = "Category not found";
    grid.innerHTML = "<p>Please select a valid product category.</p>";
}