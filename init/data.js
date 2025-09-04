const sampleListings = [
  {
    title: "Oceanfront Luxury Villa",
    description:
      "A stunning oceanfront property with panoramic views and modern amenities. Enjoy the sound of the waves from your private deck, which features a heated infinity pool and a fully equipped outdoor kitchen. The interior is professionally designed with high-end finishes.",
    image: {
      url: "https://images.unsplash.com/photo-1605352081508-2e09927ecfe3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFjYXRpb24lMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage",
    },
    price: 2500,
    location: "Malibu, CA",
    country: "USA",
  },
  {
    title: "Modern Loft Apartment",
    description:
      "A stylish loft in the heart of the city, perfect for young professionals and creative minds. This space features 20-foot ceilings, exposed brick walls, and massive windows that flood the apartment with natural light. It's a perfect base for exploring the vibrant downtown area.",
    image: {
      url: "https://images.unsplash.com/photo-1632127214676-aa66ef5ddb2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmFjYXRpb24lMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage",
    },
    price: 1200,
    location: "New York, NY",
    country: "USA",
  },
  {
    title: "Mountain Cabin Retreat",
    description:
      "A cozy cabin nestled in the mountains, ideal for a quiet weekend getaway from the hustle and bustle. The cabin features a large stone fireplace, a hot tub with mountain views, and direct access to several hiking trails. Perfect for nature lovers seeking peace and adventure.",
    image: {
      url: "https://images.unsplash.com/photo-1688680976459-3722d88ec775?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmFjYXRpb24lMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage",
    },
    price: 850,
    location: "Aspen, CO",
    country: "USA",
  },
  {
    title: "Beachfront Cottage",
    description:
      "A charming cottage just steps from the beach with a private garden and a spacious sun deck. The interior is bright and airy, with coastal decor that creates a relaxed and inviting atmosphere. It's an ideal spot for a romantic escape or a small family holiday by the sea.",
    image: {
      url: "https://images.unsplash.com/photo-1595483921906-7da233885832?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZhY2F0aW9uJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 1500,
    location: "Santa Monica, CA",
    country: "USA",
  },
  {
    title: "Downtown Penthouse",
    description:
      "A luxurious penthouse offering breathtaking city views and world-class amenities. This exclusive residence features a private rooftop terrace, floor-to-ceiling windows, and access to a 24-hour concierge service. Experience the pinnacle of urban living in absolute style and comfort.",
    image: {
      url: "https://images.unsplash.com/photo-1605352081428-500953badc02?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHZhY2F0aW9uJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 5000,
    location: "Chicago, IL",
    country: "USA",
  },
  {
    title: "Historic Victorian House",
    description:
      "A beautifully restored Victorian home with original features and modern upgrades. The property boasts intricate woodwork, stained glass windows, and a gourmet kitchen. Wander through the landscaped gardens or relax on the classic wrap-around porch in this timeless gem.",
    image: {
      url: "https://images.unsplash.com/photo-1691843407191-422987879426?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHx2YWNhdGlvbiUyMGhvdXNlfGVufDB8fDB8fHww",
      filename: "listingimage",
    },
    price: 2200,
    location: "San Francisco, CA",
    country: "USA",
  },
  {
    title: "Lakefront Property",
    description:
      "A serene lakeside home with a private dock and stunning views of the water. This property is perfect for swimming, boating, and fishing. Enjoy evening campfires by the shore and wake up to the tranquil sounds of nature in this peaceful and secluded setting.",
    image: {
      url: "https://images.unsplash.com/photo-1613404021719-95d13398f86e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZhY2F0aW9uJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 1800,
    location: "Lake Tahoe, NV",
    country: "USA",
  },
  {
    title: "City Center Condo",
    description:
      "A modern condo in the heart of the city with easy access to the best shops and restaurants. This unit features a sleek design, a balcony with city views, and access to a building pool and gym. It’s the perfect choice for travelers who want to be in the center of all the action.",
    image: {
      url: "https://images.unsplash.com/photo-1672056777373-99b62fa1e571?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHZhY2F0aW9uJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 1300,
    location: "Los Angeles, CA",
    country: "USA",
  },
  {
    title: "Private Ranch",
    description:
      "A sprawling ranch with plenty of land, perfect for equestrian lovers and large groups. The property includes horse stables, riding trails, a large barn for events, and a main house with rustic charm. Experience authentic country living with all the comforts of home.",
    image: {
      url: "https://images.unsplash.com/photo-1608471562971-2f83b0fe69d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHZhY2F0aW9uJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 3500,
    location: "Austin, TX",
    country: "USA",
  },
  {
    title: "Charming Farmhouse",
    description:
      "A rustic farmhouse with a beautiful garden and peaceful, pastoral surroundings. This restored home features a wrap-around porch, a modern kitchen with vintage charm, and fields of wildflowers. Guests are welcome to collect fresh eggs from the chicken coop for breakfast.",
    image: {
      url: "https://images.unsplash.com/photo-1617365206961-64e65c6acd3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHZhY2F0aW9uJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 900,
    location: "Napa Valley, CA",
    country: "USA",
  },
  {
    title: "Luxury Beach House",
    description:
      "A fully equipped luxury beach house perfect for family vacations and group getaways. This multi-level home offers direct beach access, multiple balconies, a game room, and a gourmet kitchen. It's designed for entertainment and relaxation with stunning ocean views from almost every room.",
    image: {
      url: "https://images.unsplash.com/photo-1650519520215-96c5566bfbae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHZhY2F0aW9uJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 4500,
    location: "Miami Beach, FL",
    country: "USA",
  },
  {
    title: "Countryside Retreat",
    description:
      "A peaceful retreat surrounded by nature, offering the perfect escape from city life. This property is set on several acres of private land with a creek, walking paths, and abundant wildlife. The house itself is warm and inviting, with all the amenities needed for a comfortable stay.",
    image: {
      url: "https://images.unsplash.com/photo-1669669258648-e1f4800c9e08?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHZhY2F0aW9uJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 1000,
    location: "Oregon, USA",
    country: "USA",
  },
  {
    title: "Eco-Friendly Home",
    description:
      "A modern eco-home built with sustainable materials and energy-efficient systems, including solar panels and rainwater harvesting. The home's design seamlessly blends indoor and outdoor living, featuring a green roof and natural ventilation. Live comfortably while minimizing your carbon footprint.",
    image: {
      url: "https://images.unsplash.com/photo-1744731711634-0bf382a442f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHZhY2F0aW9uJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 2300,
    location: "Portland, OR",
    country: "USA",
  },
  {
    title: "Contemporary Townhouse",
    description:
      "A sleek and stylish townhouse located in a trendy neighborhood known for its boutiques and cafes. This multi-level home features an open-concept living space, a minimalist design aesthetic, and a private rooftop patio perfect for entertaining guests or enjoying a quiet evening.",
    image: {
      url: "https://images.unsplash.com/photo-1606586243419-a0aeeaa173c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHZhY2F0aW9uJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 1800,
    location: "Seattle, WA",
    country: "USA",
  },
  {
    title: "Secluded Mountain Lodge",
    description:
      "A secluded lodge in the mountains offering a serene escape and great hiking trails right from your doorstep. The lodge is built from local timber and stone, featuring a great room with a massive fireplace, and expansive decks to enjoy the incredible alpine scenery. Ideal for adventure seekers.",
    image: {
      url: "https://images.unsplash.com/photo-1606586242912-6920c07d8adc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHZhY2F0aW9uJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 1500,
    location: "Bozeman, MT",
    country: "USA",
  },
  {
    title: "Luxury Urban Apartment",
    description:
      "A luxury apartment located in a prime urban area with top-of-the-line amenities and services. The building features a rooftop pool, a state-of-the-art fitness center, and a 24/7 doorman. The apartment itself is exquisitely furnished, offering a sophisticated and convenient city lifestyle.",
    image: {
      url: "https://images.unsplash.com/photo-1673322795781-0fb23da4c6ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHZhY2F0aW9uJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 3000,
    location: "San Diego, CA",
    country: "USA",
  },
  {
    title: "Chic Downtown Studio",
    description:
      "A cozy yet chic studio apartment in a vibrant downtown area, perfect for solo travelers or couples. Though compact, the space is cleverly designed with high-end appliances, a comfortable living area, and smart storage solutions. It's an affordable way to stay in the heart of the city.",
    image: {
      url: "https://images.unsplash.com/photo-1611480455812-5fbbd5d8fb6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHZhY2F0aW9uJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 1100,
    location: "San Francisco, CA",
    country: "USA",
  },
  {
    title: "Exclusive Island Villa",
    description:
      "A private villa on a tropical island, perfect for an exclusive getaway with complete privacy. This property comes with a personal staff, including a chef and butler, a private white-sand beach, and an infinity pool that overlooks the turquoise water. This is the ultimate luxury escape.",
    image: {
      url: "https://images.unsplash.com/photo-1722754354668-18bcf3412941?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHZhY2F0aW9uJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 5500,
    location: "Bahamas",
    country: "Bahamas",
  },
  {
    title: "Spacious Suburban Home",
    description:
      "A large family home in a quiet suburban neighborhood, perfect for a family looking for space and comfort. The home features a large fenced backyard with a playground, a modern kitchen perfect for family meals, and multiple living areas for everyone to spread out.",
    image: {
      url: "https://images.unsplash.com/photo-1569609119808-289e8ecbd1e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHZhY2F0aW9uJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 2000,
    location: "Austin, TX",
    country: "USA",
  },
  {
    title: "Charming Cottage in the Woods",
    description:
      "A small but charming cottage surrounded by trees and nature, offering a true storybook experience. This hideaway is perfect for those looking to disconnect, with a cozy fireplace, a small library of books, and miles of forest trails to explore right outside the door.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1687960116957-ab813e1e66e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHZhY2F0aW9uJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 950,
    location: "Upstate New York",
    country: "USA",
  },
  {
    title: "Modern Farmhouse",
    description:
      "A blend of modern and rustic design, featuring a spacious kitchen and cozy living room. The modern farmhouse aesthetic is carried throughout the home with shiplap walls, reclaimed wood beams, and high-end fixtures. Enjoy the large covered patio with views of the rolling hills.",
    image: {
      url: "https://images.unsplash.com/photo-1700145382757-b406132cd307?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHx2YWNhdGlvbiUyMGhvdXNlfGVufDB8fDB8fHww",
      filename: "listingimage",
    },
    price: 2700,
    location: "Bend, OR",
    country: "USA",
  },
  {
    title: "Stylish Loft in the City",
    description:
      "A stylish loft in the city center, perfect for anyone looking to be close to everything. The open-plan living space is ideal for socializing, and the industrial-chic decor creates a trendy, sophisticated atmosphere. It's an excellent choice for a fashionable urban retreat.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1687996107368-651e6ea58769?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHZhY2F0aW9uJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 2200,
    location: "Dallas, TX",
    country: "USA",
  },
  {
    title: "Tropical Beach House",
    description:
      "A beautiful beachfront home located on a tropical island, offering unparalleled access to the sand and surf. The house features large, open-air living spaces, a private pool, and hammocks for lounging. It's the perfect place to unwind and soak up the tropical sun.",
    image: {
      url: "https://images.unsplash.com/photo-1735596144204-134de325d87c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fHZhY2F0aW9uJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 4000,
    location: "Kauai, HI",
    country: "USA",
  },
  {
    title: "Rustic Ranch",
    description:
      "A traditional ranch home with plenty of space for outdoor activities and animals. This authentic property offers a true taste of the American West, with horse corrals, wide-open spaces, and stunning sunset views. It's ideal for a family looking for a unique and adventurous holiday.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1687960117014-f6463f5b419a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHZhY2F0aW9uJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 2800,
    location: "Phoenix, AZ",
    country: "USA",
  },
  {
    title: "Waterfront Penthouse",
    description:
      "An upscale penthouse located on the water with breathtaking views of the harbor and city skyline. The residence is the epitome of luxury, with a private elevator, designer furnishings, and an expansive terrace for watching the boats go by. A truly first-class experience.",
    image: {
      url: "https://images.unsplash.com/photo-1604771869142-9a9a9cb62bbd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHZhY2F0aW9uJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 6000,
    location: "New York, NY",
    country: "USA",
  },
  {
    title: "Urban Chic Apartment",
    description:
      "A stylish apartment located in a trendy urban area with plenty of nightlife and entertainment options. The apartment is beautifully decorated with a modern, artistic flair and includes a fully equipped kitchen and a comfortable work-from-home space. Perfect for the modern traveler.",
    image: {
      url: "https://images.unsplash.com/photo-1573140087145-1447f1ba2302?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHZhY2F0aW9uJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 2200,
    location: "Los Angeles, CA",
    country: "USA",
  },
  {
    title: "Countryside Mansion",
    description:
      "A grand mansion located on a vast countryside estate, offering privacy and opulence. The property features sprawling lawns, a private lake, a tennis court, and a majestic home with numerous bedrooms and formal living spaces. Ideal for large family gatherings or exclusive events.",
    image: {
      url: "https://images.unsplash.com/photo-1661881696238-5032fcfe1729?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fHZhY2F0aW9uJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 7000,
    location: "Montana, USA",
    country: "USA",
  },
  {
    title: "Luxury Ski Chalet",
    description:
      "A luxurious chalet located in a popular ski resort, perfect for winter sports lovers. The chalet offers ski-in/ski-out access, a private sauna and hot tub to relax in after a day on the slopes, and a cozy fireplace to gather around. A premier destination for a winter holiday.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1686782502813-51579b55f6d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fHZhY2F0aW9uJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 5000,
    location: "Vail, CO",
    country: "USA",
  },
  {
    title: "Suburban Family Home",
    description:
      "A spacious family home with a large backyard and plenty of room for growing families. Located in a safe and friendly neighborhood with excellent schools, this home is the perfect setting for making lasting memories. Includes a modern kitchen and a finished basement playroom.",
    image: {
      url: "https://images.unsplash.com/photo-1585544314038-a0d3769d0193?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fHZhY2F0aW9uJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 2400,
    location: "Denver, CO",
    country: "USA",
  },
  {
    title: "Coastal Retreat",
    description:
      "A cozy coastal retreat perfect for those who love the beach and outdoor living. This charming house features a large porch with ocean breezes, an outdoor shower for rinsing off after a swim, and a location that's just a short walk from the local village and its quaint shops.",
    image: {
      url: "https://images.unsplash.com/photo-1727379084713-fe39d4faa2b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHx2YWNhdGlvbiUyMGhvdXNlfGVufDB8fDB8fHww",
      filename: "listingimage",
    },
    price: 1800,
    location: "Cape Cod, MA",
    country: "USA",
  },
  {
    title: "Luxury Mountain Retreat",
    description:
      "A luxury mountain retreat offering stunning views and high-end amenities for an unforgettable stay. This architect-designed home features a gourmet kitchen, spa-like bathrooms, and a home theater. The expansive windows and decks are perfect for taking in the majestic mountain landscape.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1682377521590-bc565126cb4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEzfHx2YWNhdGlvbiUyMGhvdXNlfGVufDB8fDB8fHww",
      filename: "listingimage",
    },
    price: 4500,
    location: "Jackson Hole, WY",
    country: "USA",
  },
  {
    title: "City View Apartment",
    description:
      "A modern apartment offering spectacular views of the city skyline from every room. This stylish flat is located in a new high-rise building and includes access to a rooftop lounge and infinity pool. It's an ideal choice for a sophisticated stay in the city.",
    image: {
      url: "https://images.unsplash.com/photo-1691698845974-47bf7d0f0569?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHx2YWNhdGlvbiUyMGhvdXNlfGVufDB8fDB8fHww",
      filename: "listingimage",
    },
    price: 3200,
    location: "Los Angeles, CA",
    country: "USA",
  },
  {
    title: "Penthouse in the Clouds",
    description:
      "A breathtaking penthouse in Dubai with panoramic views of the city and the Arabian Gulf. This property boasts a private rooftop terrace, state-of-the-art technology, and access to a world-class spa and fitness center, defining a new standard of luxury living and high-rise comfort.",
    image: {
      url: "https://images.unsplash.com/photo-1605352081508-2e09927ecfe3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFjYXRpb24lMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage",
    },
    price: 8000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "London Townhouse",
    description:
      "An elegant townhouse in the heart of London, close to all major attractions and cultural landmarks. This beautifully preserved Georgian home features classic architecture, luxurious modern interiors, and a private walled garden, offering a peaceful retreat in the bustling city.",
    image: {
      url: "https://images.unsplash.com/photo-1604771869142-9a9a9cb62bbd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHZhY2F0aW9uJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 4500,
    location: "London",
    country: "United Kingdom",
  },
  {
    title: "Singapore Skyline Apartment",
    description:
      "A modern apartment with stunning views of the Singapore skyline, including Marina Bay Sands. The apartment is located in a high-rise building with a rooftop infinity pool and sky garden. Enjoy the city's spectacular light show from the comfort of your own living room.",
    image: {
      url: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNpbmdhcG9yZSUyMGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage",
    },
    price: 3500,
    location: "Singapore",
    country: "Singapore",
  },
  {
    title: "Bali Jungle Villa",
    description:
      "A serene villa nestled in the heart of the Bali jungle, surrounded by lush tropical greenery. This open-air concept home features a private infinity pool overlooking the ravine, daily yoga sessions, and a personal chef to prepare organic meals from the local gardens.",
    image: {
      url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFsaSUyMHZpbGxhfGVufDB8fDB8fHww",
      filename: "listingimage",
    },
    price: 2000,
    location: "Ubud, Bali",
    country: "Indonesia",
  },
  {
    title: "Scottish Highlands Cottage",
    description:
      "A cozy cottage in the Scottish Highlands with breathtaking views of the surrounding lochs and mountains. This charming stone cottage is the perfect base for exploring the rugged landscape, featuring a wood-burning stove to keep you warm after a day of hiking.",
    image: {
      url: "https://images.unsplash.com/photo-1672056777373-99b62fa1e571?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHZhY2F0aW9uJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 1500,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Dubai Marina Apartment",
    description:
      "A luxurious apartment in the Dubai Marina with stunning waterfront views and a vibrant nightlife at your doorstep. The building offers direct access to the Marina Walk, with countless restaurants and shops. Enjoy the spectacular views from your private balcony.",
    image: {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHViYWklMjBtYXJpbmElMjBhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 6000,
    location: "Dubai Marina",
    country: "United Arab Emirates",
  },
  {
    title: "Sentosa Cove Villa",
    description:
      "An exclusive villa in Sentosa Cove with a private pool and a personal yacht berth. This is one of Singapore's most prestigious addresses, offering an unparalleled lifestyle of luxury and tranquility. The villa is perfect for entertaining, with spacious living areas and beautiful water views.",
    image: {
      url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VudG9zYSUyMGNvdGUlMjB2aWxsYXxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage",
    },
    price: 10000,
    location: "Sentosa Cove",
    country: "Singapore",
  },
  {
    title: "Seminyak Beachfront Villa",
    description:
      "A stunning beachfront villa in Seminyak with a private pool and direct beach access. Famous for its stylish boutiques and world-class restaurants, Seminyak is the perfect location for a chic Bali getaway. Watch the sunset from your own private paradise.",
    image: {
      url: "https://images.unsplash.com/photo-1632127214676-aa66ef5ddb2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmFjYXRpb24lMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage",
    },
    price: 3000,
    location: "Seminyak, Bali",
    country: "Indonesia",
  },
  {
    title: "Edinburgh Castle View Apartment",
    description:
      "A modern apartment with stunning, unobstructed views of the historic Edinburgh Castle. Located in the Old Town, this flat is the perfect starting point for exploring the Royal Mile, Grassmarket, and the city's many museums. A truly magical place to stay.",
    image: {
      url: "https://images.unsplash.com/photo-1573140087145-1447f1ba2302?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHZhY2F0aW9uJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 2500,
    location: "Edinburgh",
    country: "United Kingdom",
  },
  {
    title: "Burj Khalifa View Penthouse",
    description:
      "A luxurious penthouse with breathtaking views of the Burj Khalifa and the Dubai Fountains. This residence offers unmatched opulence, with multiple balconies, a private cinema room, and interiors crafted by a world-renowned designer. Live above it all in the heart of the city.",
    image: {
      url: "https://images.unsplash.com/photo-1605352081508-2e09927ecfe3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFjYXRpb24lMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage",
    },
    price: 12000,
    location: "Downtown Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Marina Bay Sands View Apartment",
    description:
      "A modern apartment with stunning views of Marina Bay Sands and the surrounding city gardens. Located in a premier residential tower, guests have access to an Olympic-sized pool and a world-class gym. This is the perfect spot for watching the nightly light show.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1687960117014-f6463f5b419a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHZhY2F0aW9uJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 4000,
    location: "Marina Bay",
    country: "Singapore",
  },
  {
    title: "Canggu Surf Villa",
    description:
      "A stylish villa in Canggu, perfect for surfers and beach lovers. Located just minutes from the famous surf breaks of Echo Beach, this villa offers a relaxed vibe with a private pool, an open-plan living area, and plenty of space to store your boards after a long day in the water.",
    image: {
      url: "https://images.unsplash.com/photo-1611480455812-5fbbd5d8fb6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHZhY2F0aW9uJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 1800,
    location: "Canggu, Bali",
    country: "Indonesia",
  },
  {
    title: "Cornish Seaside Cottage",
    description:
      "A charming cottage on the Cornish coast with stunning sea views and rugged cliffside walks. This traditional stone cottage has been lovingly updated with modern comforts while retaining its historic character. It's the perfect spot for a tranquil and picturesque English seaside holiday.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29ybmlzaCUyMHNlYXNpZGUlMjBjb3R0YWdlfGVufDB8fDB8fHww",
      filename: "listingimage",
    },
    price: 1800,
    location: "Cornwall",
    country: "United Kingdom",
  },
  {
    title: "Palm Jumeirah Villa",
    description:
      "An exclusive villa on the iconic Palm Jumeirah with a private beach, a stunning infinity pool, and views of the Dubai skyline. This palatial home offers the utmost in privacy and luxury, with expansive living spaces and impeccable service for a truly unforgettable stay.",
    image: {
      url: "https://plus.unsplash.com/premium_photo-1687996107368-651e6ea58769?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHZhY2F0aW9uJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 15000,
    location: "Palm Jumeirah, Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Orchard Road Penthouse",
    description:
      "A luxurious penthouse on Orchard Road, Singapore's premier shopping street. This stunning residence offers designer interiors, panoramic city views, and unparalleled access to high-end boutiques, fine dining, and entertainment, all just an elevator ride away.",
    image: {
      url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3JjaGFyZCUyMHJvYWQlMjBwZW50aG91c2V8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 8000,
    location: "Orchard Road",
    country: "Singapore",
  },
  {
    title: "Uluwatu Cliffside Villa",
    description:
      "A breathtaking cliffside villa in Uluwatu with panoramic ocean views and spectacular sunsets. The property offers direct access to a secluded beach, a stunning infinity pool that seems to merge with the ocean, and five-star service to cater to your every need.",
    image: {
      url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dWx1d2F0dSUyMGNsaWZmc2lkZSUyMHZpbGxhfGVufDB8fDB8fHww",
      filename: "listingimage",
    },
    price: 4000,
    location: "Uluwatu, Bali",
    country: "Indonesia",
  },
  {
    title: "Cotswolds Country House",
    description:
      "A beautiful country house in the Cotswolds with a large garden, rolling lawns, and classic English charm. This idyllic property is perfect for a peaceful family retreat, featuring cozy fireplaces, an Aga cooker in the kitchen, and plenty of space for outdoor activities.",
    image: {
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y290c3dvbGRzJTIwY291bnRyeSUyMGhvdXNlfGVufDB8fDB8fHww",
      filename: "listingimage",
    },
    price: 3000,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Dubai Desert Oasis",
    description:
      "A luxurious oasis in the Dubai desert with a private pool, offering a unique and tranquil escape. This secluded villa combines traditional Arabian design with modern luxury, providing an unforgettable experience under the stars, far from the city's hustle.",
    image: {
      url: "https://images.unsplash.com/photo-1569609119808-289e8ecbd1e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHZhY2F0aW9uJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage",
    },
    price: 7000,
    location: "Dubai Desert",
    country: "United Arab Emirates",
  },
];

module.exports = { data: sampleListings };