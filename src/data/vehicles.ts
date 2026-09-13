export interface Vehicle {
  slug: string;
  brand: string;
  model: string;
  category: string;
  bodyType: string;
  transmission: string;
  seats: number;
  luggage: number;
  hp: number;
  pricePerDay: number;
  image: string;
}

export const featuredVehicles: Vehicle[] = [
  { slug: "ferrari-296-gts", brand: "Ferrari", model: "296 GTS", category: "Supercar", bodyType: "Cabriolet", transmission: "Automatique", seats: 2, luggage: 1, hp: 830, pricePerDay: 99, image: "/vehicles/ferrari-296-gts.png" },
  { slug: "mercedes-classe-g-amg", brand: "Mercedes-Benz", model: "Classe G 63 AMG", category: "SUV & Tout-Terrain", bodyType: "SUV", transmission: "Automatique", seats: 5, luggage: 5, hp: 585, pricePerDay: 99, image: "/vehicles/mercedes-classe-g-amg.png" },
  { slug: "lamborghini-urus-performante", brand: "Lamborghini", model: "Urus Performante", category: "SUV & Tout-Terrain", bodyType: "SUV", transmission: "Automatique", seats: 5, luggage: 4, hp: 666, pricePerDay: 99, image: "/vehicles/lamborghini-urus-performante.png" },
  { slug: "porsche-gt3-rs", brand: "Porsche", model: "911 GT3 RS 992", category: "Supercar", bodyType: "Coupé", transmission: "Automatique", seats: 2, luggage: 1, hp: 525, pricePerDay: 99, image: "/vehicles/porsche-gt3-rs.png" },
  { slug: "mercedes-maybach-s", brand: "Mercedes-Maybach", model: "Maybach S 680 V12", category: "Limousine", bodyType: "Limousine", transmission: "Automatique", seats: 4, luggage: 4, hp: 612, pricePerDay: 99, image: "/vehicles/mercedes-maybach-s.png" },
  { slug: "ferrari-12-cilindri-spider", brand: "Ferrari", model: "12Cilindri Spider", category: "Supercar", bodyType: "Cabriolet", transmission: "Automatique", seats: 2, luggage: 1, hp: 830, pricePerDay: 99, image: "/vehicles/ferrari-12-cilindri-spider.png" },
  { slug: "rolls-royce-cullinan-2025", brand: "Rolls-Royce", model: "Cullinan Series II", category: "SUV & Tout-Terrain", bodyType: "SUV", transmission: "Automatique", seats: 5, luggage: 5, hp: 571, pricePerDay: 99, image: "/vehicles/rolls-royce-cullinan-2025.png" },
  { slug: "porsche-356-speedster", brand: "Porsche", model: "356 Speedster", category: "Vintage", bodyType: "Speedster", transmission: "Manuelle", seats: 2, luggage: 1, hp: 75, pricePerDay: 99, image: "/vehicles/porsche-356-speedster.png" },
];

export const categories = [
  { name: "Citadine", count: 2 },
  { name: "Compacte", count: 3 },
  { name: "Cabriolet", count: 5 },
  { name: "Limousine", count: 2 },
  { name: "SUV & Tout-Terrain", count: 18 },
  { name: "Sportive", count: 3 },
  { name: "Supercar", count: 14 },
  { name: "Van VIP", count: 2 },
  { name: "Vintage", count: 1 },
];

export const testimonials = [
  { name: "Antoine M.", role: "Entrepreneur, Paris", avatar: "https://randomuser.me/api/portraits/men/32.jpg", text: "Une Ferrari 296 GTS livrée à mon hôtel en 2 heures. Service impeccable, voiture parfaitement préparée. ReflexRent a transformé mon anniversaire en moment inoubliable." },
  { name: "Élodie R.", role: "Wedding Planner", avatar: "https://randomuser.me/api/portraits/women/44.jpg", text: "J'ai loué la Maybach pour un mariage à Cannes. Chauffeur professionnel, voiture irréprochable. Le détail de l'accueil fait toute la différence." },
  { name: "Karim B.", role: "Directeur de production", avatar: "https://randomuser.me/api/portraits/men/12.jpg", text: "Production cinéma pour 3 semaines : 6 véhicules réservés simultanément, planning sans accroc, équipe disponible 7j/7. La référence du secteur." },
  { name: "Aymeric V.", role: "Investisseur, Monaco", avatar: "https://randomuser.me/api/portraits/men/54.jpg", text: "Le seul loueur parisien capable de fournir une G Mansory un samedi matin. Discrétion, ponctualité, voiture sublimée par l'équipe. Reflex est mon choix par défaut." },
  { name: "Sarah L.", role: "Cliente fidèle depuis 2019", avatar: "https://randomuser.me/api/portraits/women/68.jpg", text: "Première location de Lambo et j'avais des doutes. L'équipe a pris le temps d'expliquer chaque mode, chaque commande. Service éducatif, voiture explosive." },
  { name: "Hugo D.", role: "Architecte", avatar: "https://randomuser.me/api/portraits/men/77.jpg", text: "Smart Brabus pour sortir dans Paris, week-end parfait. Le luxe ne se mesure pas qu'à la cylindrée. Bravo pour cette flotte unique." },
  { name: "Camille T.", role: "Cliente entreprise", avatar: "https://randomuser.me/api/portraits/women/22.jpg", text: "Range Rover SV pour un séjour en Suisse, 1500 km sans la moindre alerte. Conciergerie disponible même en pleines vacances. Que demander de plus." },
  { name: "Yanis K.", role: "Producteur musique", avatar: "https://randomuser.me/api/portraits/men/89.jpg", text: "Ferrari Roma Cab à minuit, livraison directement devant le club. Service night shift sans surcoût. Ils comprennent leurs clients." },
  { name: "Maxime J.", role: "Passionné automobile", avatar: "https://randomuser.me/api/portraits/men/65.jpg", text: "Réservé une 911 GT3 RS pour un track day. Voiture parfaitement préparée, pleins faits, conseils sur la conduite circuit. Au-delà du loueur classique." },
];
