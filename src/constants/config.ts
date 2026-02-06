import { Config } from "../types";

export const CONFIG: Config = {
  companyName: "MK Enterprises",
  contact: {
    phone: "021 32725 303",
    altPhone: "00-92-21-2730-703",
    fax: "00-92-21-2730-815",
    email: "info@mkentpk.com",
    address: "Plot # LR-1/3, Old Haji Camp, Siddique Wahab Road Timber Market, Karachi",
  },
  socialLinks: {
    facebook: "https://facebook.com/MK-Enterprises-1034812646639420/",
    twitter: "https://x.com/MKEnterkhi",
    linkedin: "https://www.linkedin.com/in/mk-enterprises-a41a27127",
  },
  navLinks: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    // { name: "Company Profile", href: "/profile" },
    {
      name: "Products",
      href: "/products",
      dropdown: [
        { name: "Burma Teak", href: "/products/burma-teak" },
        { name: "Softwood", href: "/products/softwood" },
      ],
    },
    { name: "Contact Us", href: "/contact" },
  ],
  groupCompanies: [
    "Khalid Trading Company",
    "Hasham Impex",
    "Sarim Trade International",
    "Subhan Traders",
    "MK Timber",
    "Sunlight Wood Products (Pvt.) Ltd.",
    "Sindh High Pressure Laminates (Pvt.) Ltd. (SHPL)",
    "Standard Board (Pvt.) Ltd.",
    "World Lumber Trading",
  ],
  products: [
    { name: "Burma Teak", image: "/lumber/burma_teak.webp" },
    { name: "Softwood", image: "/lumber/softwood.webp" },
    { name: "Beech", image: "/lumber/beech.webp" },
    { name: "Hard Maple", image: "/lumber/Hard-Maple.webp" },
    { name: "Red Oak", image: "/lumber/red-oak.webp" },
    { name: "Cherry", image: "/lumber/Cherry.webp" },
  ],
  productRange: [
    { title: "Burma Teak", description: "Premium quality teak for high-end furniture and construction.", icon: "TreeDeciduous" },
    { title: "Softwood", description: "Versatile softwood solutions for various industrial applications.", icon: "Zap" },
    { title: "Hardwood", description: "Durable and strong hardwood for heavy-duty structural use.", icon: "Hammer" },
    { title: "Plywood", description: "High-grade plywood for versatile interior and exterior needs.", icon: "Layers" },
    { title: "MDF & Boards", description: "Engineered wood products for modern cabinetry and design.", icon: "Box" },
    { title: "Laminates", description: "High-pressure laminates for aesthetic and durable surfaces.", icon: "Shield" },
  ],
  testimonials: [
    {
      name: "Ahmed Raza",
      role: "Construction Lead",
      content: "MK Enterprises has been our go-to supplier for decades. Their Burma Teak quality is unmatched in the Karachi market.",
      date: "Oct 12, 2025",
    },
    {
      name: "Sajid Mehmood",
      role: "Furniture Manufacturer",
      content: "The consistency in their softwood imports has helped our production line tremendously. Highly recommended for industrial needs.",
      date: "Nov 05, 2025",
    },
    {
      name: "Zeeshan Khan",
      role: "Interior Designer",
      content: "Excellent variety of laminates and boards. The team is professional and delivery is always on time.",
      date: "Dec 20, 2025",
    },
    {
      name: "Imran Siddiqui",
      role: "Architect",
      content: "Reliable quality and honest dealings. They understand the technical requirements of large-scale projects.",
      date: "Jan 15, 2026",
    },
  ],
  lumberProducts: [
    { name: "Ash", image: "/products/ash.webp", description: "Non-resistant to heartwood decay. Ideal for architectural interiors." },
    { name: "Beech", image: "/products/beech.webp", description: "Classed as heavy, hard, strong, high in resistance to shock and highly suitable for steam bending." },
    { name: "Burma Teak", image: "/products/burma-teak.webp", description: "Holds paint and stain very well and can be polished to an exceptional finish." },
    { name: "Cherry", image: "/products/cherry.webp", description: "The wood is hard and heavy with good strength properties." },
    { name: "Dark Red Meranti", image: "/products/dark-red-meranti.webp", description: "Most reliable wood for flooring and doors." },
    { name: "Hard Maple", image: "/products/hard-maple.webp", description: "The wood is hard and heavy with good strength properties." },
    { name: "Mahagony", image: "/products/mahagony.webp", description: "Much sought-after wood based on its hardness, resilience and beauty." },
    { name: "Red Oak", image: "/products/red-oak.webp", description: "The wood is hard and heavy, with medium bending strength and stiffness." },
    { name: "Soft Maple", image: "/products/soft-maple.webp", description: "Soft maple can be stained and polished to an excellent finish." },
    { name: "Softwood", image: "/products/soft-wood.webp", description: "A versatile timber used in furniture, interior joinery, kitchen cabinets, etc." },
    { name: "Walnut", image: "/products/walnut.webp", description: "Rated as very resistant to heartwood decay. Can be used for furniture, cabinets and architectural interiors." },
    { name: "Wenge", image: "/products/wenge.webp", description: "Most reliable wood for flooring and doors." },
    { name: "Yellow Meranti", image: "/products/yellow-meranti.webp", description: "Most reliable wood for flooring and doors." },
  ],
  engineeredProducts: [
    { name: "Door Skin", image: "/products/door-skin.webp", description: "Perfectly shaped to appear like wood products but are more efficient and versatile in terms of design and finishing." },
    { name: "Wood Plastic Composite (WPC)", image: "/products/wood-plastic-composite.webp", description: "Versatile wood and plastic product is the ultimate choice for exterior applications." },
    { name: "PVC Wall Panel", image: "/products/pvc-wall-panel.webp", description: "An affordable yet attractive alternative to tiles. Waterproof and ideal for kitchens and dining rooms." },
    { name: "Soft Board", image: "/products/soft-board.webp", description: "A low density wood panel fiberboard. Lightweight and easily manageable." },
    { name: "UV MDF", image: "/products/uv-mdf.webp", description: "UV MDF has the beauty and strength to fulfill your decorative needs through polished wood." },
    { name: "Medium Density Fiberboard", image: "/products/mdf.webp", description: "A wood-panel product reconstituted from wood fibers, therefore smoothly dense." },
    { name: "Plywood", image: "/products/plywood.webp", description: "Most reliable and versatile engineered wood, exclusively tailored to meet all your needs." },
  ],
  productDetails: {
    "ash": {
      name: "Ash",
      textureImage: "/products/ash.webp",
      properties: {
        working: "Ash machines well, is good in nailing, screwing and gluing, and can be stained and polished to a very good finish. It dries fairly easily with minimal degrade, and there is little movement in performance.",
        physical: "Ash has very some good overall strength properties relative to its weight. It has excellent shock resistance and is good for steam bending.",
        durability: "Non resistant to heart wood decay. The sapwood is liable to attack by powder post and the common furniture beetle. The heartwood is moderately resistant to preservative treatment, and the sapwood is permeable.",
        uses: "Furniture, Flooring, doors, architectural interiors, highclass joinery and moulding, kitchen cabinets, panelling, tool handles, sports goods and turning.",
      },
      ratings: [
        { label: "MACHINING", value: 80 },
        { label: "NAILING", value: 80 },
        { label: "SCREWING", value: 80 },
        { label: "GLUING", value: 80 },
        { label: "FINISHING", value: 100 },
      ],
      specs: [
        { label: "SPECIFIC GRAVITY", sublabel: "(12% MC)", value: "0.60" },
        { label: "AVERAGE WEIGHT", sublabel: "(12% MC)", value: "673", unit: "kg/m³" },
        { label: "SPECIFIC VOLUMETRIC SHRINKAGE", sublabel: "(GREEN TO 6% M.C)", value: "10.7", unit: "%" },
        { label: "MODULES OF ELASTICITY", value: "11,977", secondary: "5871" },
      ]
    },
    "beech": {
      name: "Beech",
      textureImage: "/products/beech.webp",
      properties: {
        working: "Beech works readily with most hand & machine tools. It has good nailing & gluing properties and can be stained & polished to a good finish. The wood dries fairly rapidly but with a strong tendency to warp, split & surface check. It is subject to a large shrinkage and moderate movement in performance.",
        physical: "Beech wood is classed as heavy, hard, strong, high in resistance to shock and highly suitable for steam bending.",
        durability: "Rated as non-resistant to heartwood decay, and liable to attack by common furniture beetle and longhorn beetle, but permeable for preservation.",
        uses: "Furniture, Flooring, doors, internal joinery, panelling, brush handles and turning. It is particularly suitable for food containers as there is no odour or taste.",
      },
      ratings: [
        { label: "MACHINING", value: 100 },
        { label: "NAILING", value: 80 },
        { label: "SCREWING", value: 80 },
        { label: "GLUING", value: 40 },
        { label: "FINISHING", value: 100 },
      ],
      specs: [
        { label: "SPECIFIC GRAVITY", sublabel: "(12% MC)", value: "0.64" },
        { label: "AVERAGE WEIGHT", sublabel: "(12% MC)", value: "721", unit: "kg/m³" },
        { label: "SPECIFIC VOLUMETRIC SHRINKAGE", sublabel: "(GREEN TO 6% M.C)", value: "13.0", unit: "%" },
        { label: "MODULES OF ELASTICITY", value: "11,859", secondary: "5782" },
      ]
    },
    "burma-teak": {
      name: "Burma Teak",
      textureImage: "/products/burma-teak.webp",
      properties: {
        working: "Burma Teak works easily with hand and machine tools, and nails, screws and glues well. It holds paint and stain very well and can be polished to an exceptional finish. It dries slowly, and care is needed to avoid kilning degrade. Burma Teak has good dimensional stability.",
        physical: "Burma Teak is a tough hard timber of medium density, with moderate bending and crushing strengths and low stiffness. It has a good steam bending classification. Burma Teak is a yellowish brown timber with good grains and texture. Burma Teak's natural oils make it useful in exposed locations, and make the timber termite and pest resistant. Burma Teak is durable even when not treated with oil or varnish.",
        durability: "Rated as very resistant to heartwood decay, it is one of the most durable woods even under conditions favourable to decay. Sapwood liable to attack by powder post beetles.",
        uses: "Furniture, cabinet making, architectural interiors, high class joinery, doors, flooring, and panelling and boat building. A favoured wood for using in contrast with lighter coloured timbers.",
      },
      ratings: [
        { label: "MACHINING", value: 90 },
        { label: "NAILING", value: 85 },
        { label: "SCREWING", value: 85 },
        { label: "GLUING", value: 80 },
        { label: "FINISHING", value: 95 },
      ],
      specs: [
        { label: "SPECIFIC GRAVITY", sublabel: "(12% MC)", value: "0.55" },
        { label: "AVERAGE WEIGHT", sublabel: "(12% MC)", value: "740", unit: "kg/m³" },
        { label: "SPECIFIC VOLUMETRIC SHRINKAGE", sublabel: "(GREEN TO 6% M.C)", value: "10.2", unit: "%" },
        { label: "MODULES OF ELASTICITY", value: "11,58", secondary: "4" },
      ]
    },
    "cherry": {
      name: "Cherry",
      textureImage: "/products/cherry.webp",
      properties: {
        working: "Cherry is easy to machine, nails and glues well and when sanded, stained and polished, it produces an excellent smooth finish, it dries fairly quickly with moderately large shrinkage, but is dimentionally stable after kilning.",
        physical: "The wood is of medium density with good wood bending properties. It has low stiffness and medium strength and shock resistance.",
        durability: "Rated as resistant to heartwood decay. The sapwood is liable to attack by common furniture beetle; and the heartwood moderately resistant to preservative treatment.",
        uses: "Furniture and cabinet making, high class joinery, kitchen cabinets, mouldings, panelling, flooring, doors, boat interiors, musical instruments, turning and carving.",
      },
      ratings: [
        { label: "MACHINING", value: 100 },
        { label: "NAILING", value: 80 },
        { label: "SCREWING", value: 80 },
        { label: "GLUING", value: 80 },
        { label: "FINISHING", value: 100 },
      ],
      specs: [
        { label: "SPECIFIC GRAVITY", sublabel: "(12% MC)", value: "0.50" },
        { label: "AVERAGE WEIGHT", sublabel: "(12% MC)", value: "561", unit: "kg/m³" },
        { label: "SPECIFIC VOLUMETRIC SHRINKAGE", sublabel: "(GREEN TO 6% M.C)", value: "9.2", unit: "%" },
        { label: "MODULES OF ELASTICITY", value: "10,274", secondary: "4226" },
      ]
    },
    "dark-red-meranti": {
      name: "Dark Red Meranti",
      textureImage: "/products/dark-red-meranti.webp",
      properties: {
        working: "Dark Red Meranti comes in various colors such as pale pink, white to dark red, and purple. There are various sub species of the Red Meranti wood and the density of them all varies significantly. It is easy to machine and is often used as false 'mahogany' for various products.",
        physical: "Dark Red Meranti is typically of a dark reddish or a purple brown and features white resin streaks. The wood comes in straight and interlocked grain with a coarse texture and little natural luster.",
        durability: "Rated as moderately durable to non-durable in decay resistance and is vulnerable to insect attacks.",
        uses: "Plywood, interior furniture, general construction, concrete forms, veneer, and boatbuilding.",
      },
      ratings: [],
      specs: [
        { label: "SPECIFIC GRAVITY", sublabel: "(12% MC)", value: "0.55" },
        { label: "AVERAGE WEIGHT", sublabel: "(12% MC)", value: "675", unit: "kg/m³" },
        { label: "SPECIFIC VOLUMETRIC SHRINKAGE", sublabel: "(GREEN TO 6% M.C)", value: "12.5", unit: "%" },
        { label: "MODULES OF ELASTICITY", value: "13,020", secondary: "3,570" },
      ]
    },
    "hard-maple": {
      name: "Hard Maple",
      textureImage: "/products/hard-maple.webp",
      properties: {
        working: "Hard maple dries slowly with a large shrinkage, so it can be susceptible to movement in performance. Pre-boring is recommended when nailing and screwing. With care it machines well, turns well, glues satisfactorily, and can be stained and polished to an outstanding finish.",
        physical: "The wood is hard and heavy with good strength properties, in particular its high resistance to abrasion and wear. It also has good steam bending properties.",
        durability: "Rated as slightly or non-resistant to heartwood decay. Sapwood is liable to attack by furniture beetle. The heartwood is resistant to preservative treatment but the sapwood is permeable.",
        uses: "Flooring, furniture, panelling, kitchen cabinets, worktops and table tops, interior joinery: stairs, handrails, mouldings, and doors.",
      },
      ratings: [
        { label: "MACHINING", value: 80 },
        { label: "NAILING", value: 60 },
        { label: "SCREWING", value: 60 },
        { label: "GLUING", value: 80 },
        { label: "FINISHING", value: 100 },
      ],
      specs: [
        { label: "SPECIFIC GRAVITY", sublabel: "(12% MC)", value: "0.63" },
        { label: "AVERAGE WEIGHT", sublabel: "(12% MC)", value: "705", unit: "kg/m³" },
        { label: "SPECIFIC VOLUMETRIC SHRINKAGE", sublabel: "(GREEN TO 6% M.C)", value: "11.9", unit: "%" },
        { label: "MODULES OF ELASTICITY", value: "12,618", secondary: "6450" },
      ]
    },
    "mahagony": {
      name: "Mahagony",
      textureImage: "/products/mahagony.webp",
      properties: {
        working: "Mahogany is a much sought-after wood, based on its hardness, resilience and beauty. It is commonly regarded as the world's leading wood for fine-quality furniture, cabinetry, sculpture, carving, interior trim and other applications. Mahogany lumber machines well. Cuts are clean and work easily with hand or power tools.",
        physical: "Mahogany is an open-grained wood that sands and planes well. If a smooth finish is desired, the large pores of the wood must be filled prior to applying the final protective coating. Mahogany is typically red, pink, or salmon-colored when first cut. The hues deepen as the wood matures, taking on a rich red or brown-red cast. Mahogany has a fine to medium texture, with grain that varies from straight to wavy or curly.",
        durability: "Mahogany is a strong, robust wood. Its lasting durability makes it a popular choice for furniture. Mahogany maintains its integrity as it resists swelling, shrinking and warping over time, making it ideal for areas prone to excessive moisture or humidity.",
        uses: "Furniture, cabinet making, architectural interiors, high class joinery, doors, flooring, panelling and boat building. A favoured wood for using in contrast with lighter coloured timbers.",
      },
      ratings: [
        { label: "MACHINING", value: 100 },
        { label: "NAILING", value: 80 },
        { label: "SCREWING", value: 80 },
        { label: "GLUING", value: 80 },
        { label: "FINISHING", value: 100 },
      ],
      specs: [
        { label: "SPECIFIC GRAVITY", sublabel: "(12% MC)", value: "0.55" },
        { label: "AVERAGE WEIGHT", sublabel: "(12% MC)", value: "850", unit: "kg/m³" },
        { label: "SPECIFIC VOLUMETRIC SHRINKAGE", sublabel: "(GREEN TO 6% M.C)", value: "10.2", unit: "%" },
        { label: "MODULES OF ELASTICITY", value: "11,584", secondary: "4492" },
      ]
    },
    "red-oak": {
      name: "Red Oak",
      textureImage: "/products/red-oak.webp",
      properties: {
        working: "Red oak machines well, nailing and screwing is good although pre-boring is recommended, and it can be stained and polished to a good finish. It dries slowly with a tendency to split and warp. It has a high shrinkage and can be susceptible to movement in performance.",
        physical: "The wood is hard and heavy, with medium bending strength and stiffness and high crushing strength. It is very good for steam bending. Southern red oak has a more rapid growth than Northern red oak and tends to be harder and heavier.",
        durability: "Rated slightly to non-resistant to heartwood decay, moderately easy to treat with preservatives.",
        uses: "Construction, furniture, flooring, architectural interiors, internal joinery and mouldings, doors, kitchen cabinets, panelling, coffins and caskets. Not suitable for tight cooperage.",
      },
      ratings: [
        { label: "MACHINING", value: 100 },
        { label: "NAILING", value: 80 },
        { label: "SCREWING", value: 80 },
        { label: "GLUING", value: 80 },
        { label: "FINISHING", value: 100 },
      ],
      specs: [
        { label: "SPECIFIC GRAVITY", sublabel: "(12% MC)", value: "0.63" },
        { label: "AVERAGE WEIGHT", sublabel: "(12% MC)", value: "705", unit: "kg/m³" },
        { label: "SPECIFIC VOLUMETRIC SHRINKAGE", sublabel: "(GREEN TO 6% M.C)", value: "10.8", unit: "%" },
        { label: "MODULES OF ELASTICITY", value: "12,549" },
        { label: "HARDESS", value: "5375" },
      ]
    },
    "soft-maple": {
      name: "Soft Maple",
      textureImage: "/products/soft-maple.webp",
      properties: {
        working: "Soft maple machines well and can be stained and polished to an excellent finish. It glues, screws, and nails satisfactorily. It dries slowly with minimal degrade and there is little movement in performance.",
        physical: "Soft maple is about 25% less hard than hard maple, has medium bending and crushing strength, and is low in stiffness and shock resistance. It has good steam bending properties.",
        durability: "Non-resistant to decay and insect attack. The heartwood is moderately resistant to preservative treatment but the sapwood is permeable.",
        uses: "Furniture, panelling, interior joinery, kitchen cabinets, mouldings, doors, musical instruments, and turning. Soft maple is often used as a substitute for hard maple or stained to resemble other species such as cherry.",
      },
      ratings: [
        { label: "MACHINING", value: 80 },
        { label: "NAILING", value: 60 },
        { label: "SCREWING", value: 60 },
        { label: "GLUING", value: 60 },
        { label: "FINISHING", value: 100 },
      ],
      specs: [
        { label: "SPECIFIC GRAVITY", sublabel: "(12% MC)", value: "0.54" },
        { label: "AVERAGE WEIGHT", sublabel: "(12% MC)", value: "609", unit: "kg/m³" },
        { label: "SPECIFIC VOLUMETRIC SHRINKAGE", sublabel: "(GREEN TO 6% M.C)", value: "10.5", unit: "%" },
        { label: "MODULES OF ELASTICITY", value: "11,308", secondary: "4226" },
      ]
    },
    "softwood": {
      name: "Softwood",
      textureImage: "/products/soft-wood.webp",
      properties: {
        working: "A versatile timber that is easy to machine, plane, turn, glue and bore. It dries easily with minimal movement in performance and has little tendency to split when nailed. It takes and holds paint, enamel and stain exceptionally well.",
        physical: "A medium density wood with low bending, shock resistance, stiffness and compression values, with a medium steam bending classification.",
        durability: "Non-resistant to decay, heartwood is moderately resistant to preservative treatment, sapwood is permeable.",
        uses: "Light construction, furniture, interior joinery, kitchen cabinets, doors, panelling, mouldings, edged-glued panels, turning and carving.",
      },
      ratings: [
        { label: "MACHINING", value: 100 },
        { label: "NAILING", value: 40 },
        { label: "SCREWING", value: 80 },
        { label: "GLUING", value: 80 },
        { label: "FINISHING", value: 100 },
      ],
      specs: [
        { label: "SPECIFIC GRAVITY", sublabel: "(12% MC)", value: "0.42" },
        { label: "AVERAGE WEIGHT", sublabel: "(12% MC)", value: "449", unit: "kg/m³" },
        { label: "SPECIFIC VOLUMETRIC SHRINKAGE", sublabel: "(GREEN TO 6% M.C)", value: "9.8", unit: "%" },
        { label: "MODULES OF ELASTICITY", value: "10,894", secondary: "2402" },
      ],
      regionalSpecs: [
        {
          region: "USA",
          subRegions: [
            {
              title: "EASTERN WHITE PINE (EWP)",
              headers: ["Thickness", "Width", "Length", "Grade"],
              rows: [["19 mm", "89, 140, 184, 235, 286 mm", "6 to 16 ft", "Industrial & Standard Grade"]]
            },
            {
              title: "PONDEROSA PINE (PPLP)",
              headers: ["Thickness", "Width", "Length", "Grade"],
              rows: [["19 mm", "235 & 286 mm", "6 to 16 ft", "Common #3 Grade"]]
            },
            {
              title: "SOUTHERN YELLOW (SYP)",
              headers: ["Thickness", "Width", "Length", "Grade"],
              rows: [
                ["38 mm", "235 mm", "8, 10, 12, 14, 16 ft", "S4S"],
                ["50 mm", "8, 10, 12 in", "8, 10, 12, 14, 16 ft", "Rough"]
              ]
            }
          ]
        },
        {
          region: "EUROPE",
          subRegions: [
            {
              title: "ROUGH KD WHITEWOOD/REDWOOD",
              headers: ["Thickness", "Width", "Length"],
              rows: [["22 mm to 30mm", "44mm & up", "2.985 & 3.985 Meter"]]
            },
            {
              title: "S4S WHITEWOOD",
              headers: ["Thickness", "Width", "Length"],
              rows: [
                ["21 mm", "90, 105, 120 mm", "2.985 & 3.985 Meter"],
                ["27 mm", "90, 105, 120 mm", "2.985 & 3.985 Meter"],
                ["30 mm", "90, 105, 120 mm", "2.985 & 3.985 Meter"],
                ["45 mm", "90, 105, 120 mm", "2.985 & 3.985 Meter"]
              ]
            }
          ]
        },
        {
          region: "CANADA",
          subRegions: [
            {
              title: "SPF",
              headers: ["Thickness", "Width", "Length", "Grade"],
              rows: [
                ["38 mm", "89 mm", "7 ft", "A Grade"],
                ["38 mm", "140 mm", "7 ft", "Standard Grade"],
                ["38 mm", "184 mm", "14 ft", "Select Grade"],
                ["38 mm", "235 mm", "8, 10, 12, 14, 16, 18 & 20 ft", "No. 2 & J Grade"]
              ]
            },
            {
              title: "HEMLOCK",
              headers: ["Thickness", "Width", "Length", "Grade"],
              rows: [["105 mm", "105 mm", "10, 12, 13 ft", "Utility Grade"]]
            },
            {
              title: "SPF/ESLP BOARDS",
              headers: ["Thickness", "Width", "Length", "Grade"],
              rows: [["19 mm", "235 & 286 mm", "6, 8, 10, 12, 14, 16 ft", "Common #3 Grade"]]
            }
          ]
        }
      ]
    },
    "walnut": {
      name: "Walnut",
      textureImage: "/products/walnut.webp",
      properties: {
        working: "Walnut works easily with hand and machine tools, and nails, screws and glues well. It holds paint and stain very well and can be polished to an exceptional finish. It dries slowly, and care is needed to avoid kilning degrade. Walnut has good dimensional stability.",
        physical: "Walnut is a tough hard timber of medium density, with moderate bending and crushing strengths and low stiffness, it has a good steam bending classification.",
        durability: "Rated as very resistant to heartwood decay, it is one of the most durable woods even under conditions favourable to decay. Sapwood liable to attack by powder post beetles.",
        uses: "Furniture, cabinet making, architectural interiors, high class joinery, doors, flooring, and panelling. A favoured wood for using in contrast with lighter coloured timbers.",
      },
      ratings: [
        { label: "MACHINING", value: 100 },
        { label: "NAILING", value: 80 },
        { label: "SCREWING", value: 80 },
        { label: "GLUING", value: 80 },
        { label: "FINISHING", value: 100 },
      ],
      specs: [
        { label: "SPECIFIC GRAVITY", sublabel: "(12% MC)", value: "0.55" },
        { label: "AVERAGE WEIGHT", sublabel: "(12% MC)", value: "609", unit: "kg/m³" },
        { label: "SPECIFIC VOLUMETRIC SHRINKAGE", sublabel: "(GREEN TO 6% M.C)", value: "10.2", unit: "%" },
        { label: "MODULES OF ELASTICITY", value: "11,584", secondary: "4492" },
      ]
    },
    "wenge": {
      name: "Wenge",
      textureImage: "/products/wenge.webp",
      properties: {
        working: "Wenge wood is a challenging type of wood to deal with and requires sharp tools. With a long coarse texture, the wood glues well only if done right after planing, scraping or sanding. It is a very porous wood though, so pore filling is essential if a fine finish is required. The wood is known to be toxic and can affect the workers handling the wood adversely.",
        physical: "Wenge is medium brown in color, sometimes with a reddish or yellowish hue with black streaks. Upon application of a wood polish or finish, the wood color can turn almost black. The grain of the Wenge is straight and features a coarse texture and low natural luster.",
        durability: "Rated as very durable and is resistant to termite attack.",
        uses: "Veneer, paneling, furniture, turned objects, and musical instruments.",
      },
      ratings: [], 
      specs: [
        { label: "SPECIFIC GRAVITY", sublabel: "(12% MC)", value: "0.72" },
        { label: "AVERAGE WEIGHT", sublabel: "(12% MC)", value: "870", unit: "kg/m³" },
        { label: "SPECIFIC VOLUMETRIC SHRINKAGE", sublabel: "(GREEN TO 6% M.C)", value: "12.9", unit: "%" },
        { label: "MODULES OF ELASTICITY", value: "21,050", secondary: "8,600" },
      ]
    },
    "yellow-meranti": {
      name: "Yellow Meranti",
      textureImage: "/products/yellow-meranti.webp",
      properties: {
        working: "The Yellow meranti is one of the most common tropical hardwoods. It is easy to handle with machine tools and is tough to handle with hand tools because of its hardness and high density. It absorbs pain quickly and glues well but it is advised to use oil for paints and heavy duty glue due to the high density of the hardwood.",
        physical: "The Yellow Meranti is a typically yellow and yellow to brown color that will darken with age. The wood had a coarse texture and large pores with interlocked grain.",
        durability: "Rated as non-durable in decay resistance and is vulnerable to insect attacks.",
        uses: "Plywood, interior furniture, and general construction lumber.",
      },
      ratings: [],
      specs: [
        { label: "SPECIFIC GRAVITY", sublabel: "(12% MC)", value: "0.44" },
        { label: "AVERAGE WEIGHT", sublabel: "(12% MC)", value: "565", unit: "kg/m³" },
        { label: "SPECIFIC VOLUMETRIC SHRINKAGE", sublabel: "(GREEN TO 6% M.C)", value: "10.5", unit: "%" },
        { label: "MODULES OF ELASTICITY", value: "14,100", secondary: "3,120" },
      ]
    },
    "plywood": {
      name: "Plywood",
      type: "engineered",
      subProducts: [
        {
          title: "Fancy Plywood/MDF",
          applications: ["Furniture", "Interior decorative wood ornamentation", "Cabinet doors", "Paneling", "Exterior wood work", "Racks and Partitions etc"],
          description: "Available in wide range of wood veneers like: red oak, maple, sapele, beech, walnut, ebony, wenge, Burma teak, white ash, ash and many more. This aesthetically pleasing hardwood veneer with top notch quality especially designed to meet your wood based decorative needs.",
          image: "/engineered/fancy_plywood_mdf.webp",
          dimensions: "Size / thickness: 2.5mm x 4ft x 8ft"
        },
        {
          title: "Marine Plywood",
          applications: ["Bathroom and kitchen wall subflooring", "Lake platforms", "Deck", "Boat Dock", "Feature walls in motor homes"],
          description: "Marine plywood is specifically created to withstand water subversion. The Rolls Royce of Plywood; Marine Plywood is the absolute best when it comes to multi-perform product. Structured with quality grade face and core veneers so that it can prevent moisture from getting collected in the voids. Its self-sustaining qualities require less maintenance, making it stay perfectly in shape for decades.",
          image: "/engineered/marine_plywood.webp",
          dimensions: "Thickness: 12mm x 4ft x 8ft, 18mm x 4ft x 8ft"
        },
        {
          title: "Film Faced",
          applications: ["Construction and Building industry", "Transport Equipment containers", "Truck, trailer, wagon floors", "Shear", "Furniture", "Framework", "Hoardings", "Interior and exterior paneling", "Fencing"],
          description: "This lightweight, corrosion and water resistant and durable material is the most preferred choice to be used in open environment. Popular and birch film faced plywood are available keeping in view the varying needs of application. This plywood demands low maintenance because of the ease it provides with cleaning and cutting. Film faced plywood is multipurpose and has hard wearing tensile, creasing and shearing strength.",
          image: "/engineered/film_faced.webp",
          dimensions: "Size: 16mm x 4ft x 8ft, 18mm x 4ft x 8ft"
        },
        {
          title: "Commercial Ply",
          applications: ["Furniture", "Cabinets", "Shear", "Decking", "Roofing", "Half pipes", "Concrete Forms"],
          description: "Commercial Plywood is one of the strongest of plywood available. This type of plywood is trusted to be used in homes, commercial buildings, office furniture due to its dimensional accuracy and fine thickness. Top class, high density, commercial plywood with numerous specifications, has the ability to endure rough conditions.",
          image: "/engineered/commercial_ply.webp",
          dimensions: "Dimensions: 5mm x 4ft x 8ft, 11mm x 4ft x 8ft, 18mm x 4ft x 8ft"
        }
      ]
    },
    "medium-density-fiberboard": {
      name: "MDF",
      type: "engineered",
      subProducts: [
        {
          title: "MDF (Medium Density Fiberboard)",
          applications: [
            "Interior use applications",
            "Kitchen moldings",
            "Bathroom wood work",
            "Furniture making",
            "Display cabinets",
            "Wall-panels",
            "Storage units"
          ],
          description: "Formulated from wood fibers glued under heat and pressure, MDF is a kind of fiberboard with a fine sanded or decorative surface. MDF is created with the finest of particles and can be easily drilled, filled, machined or drilled without any exterior damage. MDF is a wood panel product which is reconstituted from wood fibers and therefore is smoothly dense throughout with even sides which makes it excellent for machining. MDF is comparatively more water enduring as compared to particle board. It is available in raw form with a fine sanded surface or with decorative overlay such as wood veneer, melamine paper or vinyl.",
          image: "/engineered/mdf.webp",
          dimensions: "W x L: 4ft x 8ft \n Thickness: 2.3mm, 3.4mm, 7mm, 10mm, 11mm, 16mm, 17mm, 24mm"
        }
      ]
    },
    "wood-plastic-composite-wpc": {
      name: "Wood Plastic Composite",
      type: "engineered",
      subProducts: [
        {
          title: "Wood Plastic Composite (WPC)",
          applications: ["Fencing", "Decking", "Park furniture", "Sheeting", "Posts and poles"],
          description: "Wood Plastic Composite (WPC) is here to stay as it soon becomes the future lumber. Perfectly shaped to appear like wood products but are more efficient and versatile in terms of design, finishing, stiffness and joining. The ultimate choice for exterior application, demanding mould, weather and water resistance. These wood and plastic hybrids are exceptionally ecofriendly and durable, in terms of performance.",
          image: "/engineered/wood_plastic_composite_wpc.webp",
          dimensions: "Custom sizes available based on industrial requirements."
        },
        {
          title: "WPC Outdoor Deck",
          applications: ["Outdoor Decking", "Poolside Platforms", "Garden Pathways"],
          description: "Our finest quality WPC for decking is a reliable solution to your decking needs. Durable, water resistant, ecofriendly and to top it all, does not require paint, stain or seal. The WPC decking is wear-resistant with qualities like: not attracting mold due to its inability to store water or rot. The colors stay as good as new without splitting or rotting. The wood counterpart in terms of appearance and handling but is as durable as plastic.",
          image: "/engineered/wpc_outdoor_deck.webp",
          dimensions: "Available in standard deck plank dimensions."
        },
        {
          title: "WPC Wall Panel",
          applications: ["Wall paneling", "Ceiling and Partition Boards", "Exterior Facades"],
          description: "Now you can add the panache of wood and the durability of plastic to your wood panels with the ease to install and low maintenance WPC wall panels. Available in a range of colors, patterns and widths for you to add a unique touch to your walls. Environment Friendly, fire, UV rays, impact and water resistant, these WPC wall panels also rid you from the complexities of paint, wrapping or uneven finishing.",
          image: "/engineered/wpc_wall_panel.webp",
          dimensions: "Variable widths and patterns available."
        }
      ]
    },
    "door-skin": {
      name: "Door Skin",
      type: "engineered",
      subProducts: [
        {
          title: "Door Skin (Veneered/Regular)",
          applications: ["Low End Projects", "Commercial Projects", "Office Buildings"],
          description: "Door skins are the perfect alternative to fit to your door without having to worry about removing it all. A perfect alternative to traditional all-wood doors and can be easily used to add color, design and finish to your doors. Easy to stick and maintain with the most durable finish, without any sap, stains or pest attacks on your door.",
          image: "/engineered/door_skin.webp",
          dimensions: "Length: 7 ft \n Widths: 690mm, 770mm, 850mm, 920mm, 990mm, 1050mm"
        },
        {
          title: "Door Skin (Melamine)",
          applications: ["Interior and exterior door skins", "Partition skins", "Door paneling"],
          description: "Melamine door skins are perfectly shaped to appear like wood products but are more efficient and versatile in terms of design and finishing. They provide a high-resistance surface that is easy to clean and maintain while offering a premium look for commercial and residential door projects.",
          image: "/engineered/door_skin_melamine.webp",
          dimensions: "Widths: 690mm, 770mm, 850mm, 920mm, 990mm, 1050mm"
        }
      ]
    },
    "pvc-wall-panel": {
      name: "PVC Wall Panel",
      type: "engineered",
      subProducts: [
        {
          title: "PVC Wall Panel",
          applications: ["Kitchens", "Decorative wall panels", "Dining Rooms", "Living rooms"],
          description: "PVC wall panels are an affordable yet an attractive alternative to tiles. Not just, are they durable in comparison but are handy in terms of installation and maintenance. Available in a wide range of colors, finishes and designs, these wall panels are water proof and are specifically the ideal choice to be used in dining room, decorative walls and kitchens. Time to replace the traditional tiles, with something that is much more attractive and easy to handle.",
          image: "/engineered/pvc_wall_panel.webp",
          dimensions: "Length: 3 meter \n Width: 10 inches"
        }
      ]
    },
    "soft-board": {
      name: "Soft Board",
      type: "engineered",
      subProducts: [
        {
          title: "Soft Board",
          applications: [
            "Wall lining",
            "Screens",
            "Sound proofing",
            "Shielding boards",
            "Notice Boards",
            "Boards for insulation ceiling"
          ],
          description: "Soft board is a low density wood panel fiberboard, so easily manageable and lightweight that it is considered an ideal choice for wood work within corporate offices, commercial buildings, and educational institutes and at homes. The thermal and sound absorbing quality makes it a perfect choice for place with a sound proof or energy saving ambience.",
          image: "/engineered/softboard.webp",
          dimensions: "10mm x 4ft x 8ft"
        }
      ]
    },
    "uv-mdf": {
      name: "UV MDF",
      type: "engineered",
      subProducts: [
        {
          title: "UV MDF (High Gloss)",
          applications: [
            "Cabinet Doors",
            "Wardrobe",
            "Cupboard",
            "Décor items",
            "Sliding doors"
          ],
          description: "UV coated MDF comes with a number of benefits like a variety of colors, gloss, and textures. Available in thick and thin finishes, it has the beauty and strength to fulfill your decorative needs through polished wood. It is highly durable, moisture resistant, and environmentally friendly, making it an ideal choice for modern interior furniture.",
          image: "/engineered/uv_mdf.webp",
          dimensions: "W x L: 4ft x 8ft \n Thickness options available upon request."
        }
      ]
    }
  }
};
