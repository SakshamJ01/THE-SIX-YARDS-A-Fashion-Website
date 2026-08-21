const products = [
  // =========================
  // WOMEN'S WEAR
  // =========================

  {
    id: 1,
    slug: "ivory-handwoven-saree",
    name: "Ivory Handwoven Saree",
    category: "Women's Wear",
    subcategory: "Sarees",
    price: 6499,
    image: "/images/products/women/ivory-handwoven-saree.jpg",
    description:
      "A timeless handwoven saree crafted with understated elegance. Designed for effortless occasions and refined everyday dressing.",
    details: "Handwoven fabric · Lightweight drape · Traditional craftsmanship",
  },

  {
    id: 2,
    name: "Heritage Silk Saree",
    category: "Women's Wear",
    subcategory: "Sarees",
    price: 7999,
    image: "/images/products/women/heritage-silk-saree.jpg",
    slug: "heritage-silk-saree",
    description:
      "A rich silk saree inspired by India's timeless textile traditions, created for moments that deserve something special.",
    details: "Pure silk · Heritage-inspired weave · Elegant finish",
  },

  {
    id: 3,
    name: "Contemporary Draped Saree",
    category: "Women's Wear",
    subcategory: "Sarees",
    price: 5499,
    image: "/images/products/women/contemporary-draped-saree.jpg",
    slug: "contemporary-draped-saree",
    description:
      "A contemporary interpretation of the classic saree, balancing graceful draping with modern simplicity.",
    details: "Soft fabric · Contemporary silhouette · Easy drape",
  },


  // =========================
  // MEN'S WEAR
  // =========================

  {
    id: 4,
    name: "Classic Ivory Kurta",
    category: "Men's Wear",
    subcategory: "Kurtas",
    price: 3999,
    image: "/images/products/men/classic-ivory-kurta.jpg",
    slug: "classic-ivory-kurta",
    description:
      "A refined ivory kurta with a clean silhouette, designed for quiet confidence across everyday and festive occasions.",
    details: "Soft cotton blend · Relaxed fit · Hand-finished details",
  },

  {
    id: 5,
    name: "Heritage Kurta Set",
    category: "Men's Wear",
    subcategory: "Kurta Sets",
    price: 5999,
    image: "/images/products/men/heritage-kurta-set.jpg",
    slug: "heritage-kurta-set",
    description:
      "A considered kurta set that brings traditional craft and modern ease together for celebrations and gatherings.",
    details: "Coordinated set · Comfortable drape · Heritage-inspired detailing",
  },

  {
    id: 6,
    name: "Festive Nehru Jacket",
    category: "Men's Wear",
    subcategory: "Nehru Jackets",
    price: 4499,
    image: "/images/products/men/festive-nehru-jacket.jpg",
    slug: "festive-nehru-jacket",
    description:
      "A versatile Nehru jacket that adds polished structure and a festive finish to traditional and contemporary looks.",
    details: "Structured silhouette · Layering piece · Refined finish",
  },


  // =========================
  // SPECIAL COLLECTIONS
  // =========================

  {
    id: 7,
    name: "Wedding Edit Saree",
    category: "Special Collections",
    subcategory: "Wedding Edit",
    price: 8999,
    image: "/images/products/special/wedding-edit-saree.jpg",
    slug: "wedding-edit-saree",
    description:
      "An occasion-ready saree chosen for celebrations, with a graceful drape and an understated sense of ceremony.",
    details: "Occasion wear · Elegant drape · Celebration-ready finish",
  },

  {
    id: 8,
    name: "Heritage Signature",
    category: "Special Collections",
    subcategory: "Heritage",
    price: 9999,
    image: "/images/products/special/heritage-signature.jpg",
    slug: "heritage-signature",
    description:
      "A signature piece shaped by India's textile heritage and curated for modern wardrobes.",
    details: "Heritage textile · Considered silhouette · Signature finish",
  },

  {
    id: 9,
    name: "Six Yards Signature",
    category: "Special Collections",
    subcategory: "Signature Collection",
    price: 11999,
    image: "/images/products/special/six-yards-signature.jpg",
    slug: "six-yards-signature",
    description:
      "The defining Six Yards piece: timeless, expressive and made for moments that stay with you.",
    details: "Signature collection · Thoughtful craftsmanship · Timeless drape",
  },
];

export default products;