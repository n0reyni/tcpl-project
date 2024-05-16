import { useState } from "react";
import Medecine from "src/components/Medecine";

export default function Medecines() {
    const [searchValue, setSearchValue] = useState("");
    const [medicines, setMedicines] = useState([
        { image: "https://s2.euro-pharmas.com/3112-large_default/doliprane-liquiz-200mg-sanofi.jpg", name: "Doliprane 200mg", description: "Doliprane est un médicament antalgique (calmant la douleur) et antipyrétique (baisse la fièvre). Il est utilisé pour traiter la fièvre et les douleurs telles que les maux de tête, les douleurs dentaires, les courbatures, les douleurs menstruelles et les douleurs liées à l'arthrite.", prix: "1500 FCFA", redirectUrl: "https://buy.stripe.com/test_3cscOheug6FvfQs8ww" },
        { image: "https://schmerzklinik.de/wp-content/uploads/2018/05/aimovig.jpg", name: "Aimovig 70mg", description: "Aimovig (erenumab) est un médicament prescrit pour le traitement de la migraine chez les adultes. Il appartient à une classe de médicaments appelés anticorps monoclonaux et agit en bloquant l'activité d'une protéine impliquée dans les crises de migraine.", prix: "25000 FCFA" },
        { image: "https://exphar.com/wp-content/uploads/2021/02/febrilex-comprimes-medicament-afrique-exphar.jpeg", name: "Febrilex 50 pochettes", description: "Febrilex est un médicament antipyrétique utilisé pour réduire la fièvre. Il est également utilisé pour soulager les douleurs légères à modérées telles que les maux de tête, les douleurs dentaires, les douleurs menstruelles et les douleurs musculaires.", prix: "7500 FCFA" },
        { image: "https://exphar.com/wp-content/uploads/2021/02/Flexdol-comprimes.jpg", name: "Flexdol 10 Comprimés", description: "Flexdol est un médicament analgésique et anti-inflammatoire utilisé pour soulager les douleurs articulaires et musculaires associées à des conditions telles que l'arthrite, les entorses et les tensions musculaires.", prix: "5000 FCFA" },
        { image: "https://www.pharmashopi.com/images/Image/cyclo3-fort-comprimes-petit-1405582984-1-1.jpg", name: "Cyclo 3 fort 30 Gélules", description: "Cyclo 3 fort est un médicament utilisé pour soulager les symptômes des troubles veineux chroniques, tels que les jambes lourdes, les douleurs, les gonflements et les démangeaisons associées à la circulation sanguine insuffisante dans les veines.", prix: "3000 FCFA" },
        { image: "https://www.pharmashopi.com/images/imagecache/440x440/png/solacy-pediatrique-1411132732.png", name: "Solacy 60 comprimés", description: "Solacy est un médicament contenant de la vitamine C utilisé pour prévenir et traiter la carence en vitamine C, qui peut entraîner des symptômes tels que la fatigue, les saignements des gencives, les douleurs articulaires et musculaires, et une cicatrisation lente des plaies.", prix: "12000 FCFA" },
        { image: "https://dvago-assets.s3.ap-southeast-1.amazonaws.com/ProductsImages/02557.webp", name: "Panadol 500mg", description: "Panadol est un médicament analgésique et antipyrétique utilisé pour soulager la douleur et abaisser la fièvre. Il est couramment utilisé pour traiter les maux de tête, les douleurs musculaires, les douleurs articulaires, les douleurs dentaires et la fièvre.", prix: "2000 FCFA" },
        { image: "https://www.pharmaciepolygone.com/media/cache/original/06/dc/0186bae480647df36c12c194fa8a.jpg", name: "Gaviscon 20 sachets", description: "Gaviscon est un médicament utilisé pour soulager les brûlures d'estomac et les remontées acides. Il agit en formant une barrière protectrice dans l'estomac pour empêcher le reflux acide et soulager les symptômes associés tels que les douleurs thoraciques et la sensation de brûlure.", prix: "6000 FCFA" },
        { image: "https://cdn.shop-pharmacie.fr/images/F10000143-p10.jpg", name: "Diosmine 600mg", description: "La Diosmine est un médicament veinotonique, il est indiqué dans le traitement des symptômes en rapport avec l'insuffisance veinolymphatique ( jambes lourdes, douleurs, sensations pénibles dites impatiences lors des affections variqueuses) ainsi que dans le traitement des signes fonctionnels liés à la crise hémorroïdaire. Il est utilisé dans le traitement des troubles de la circulation veineuse (insuffisance veinolymphatique) et de la crise hémorroïdaire.", prix: "4000 FCFA" }
    ]);

    const handleSearch = (e) => {
        const { value } = e.target;
        setSearchValue(value);
    };

    const searchResults = searchValue ? medicines.filter(medicine => medicine.name.toLowerCase().includes(searchValue.toLowerCase())) : medicines;

    return (
        <div>
            <form className="max-w-md mx-auto mt-5">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-white-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-green-500 focus:outline-none focus:border-green-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Trouver des medicaments..." value={searchValue} onChange={handleSearch} required />
                </div>
            </form>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {searchResults.map((medicine, index) => (
                    <Medecine key={index} image={medicine.image} name={medicine.name} description={medicine.description} prix={medicine.prix} redirectUrl={medicine.redirectUrl} />
                ))}
            </div>
        </div>
    );
}
