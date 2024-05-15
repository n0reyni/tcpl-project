import { Helmet } from "@redwoodjs/web";

export default function Medecine({ name, description, image, prix }) {
    return (
        <>
            <Helmet>
                <title>Medecine | Xenon Pharmacy</title>
            </Helmet>
            <section class="py-10 bg-gray-100 sm:py-16 lg:py-24">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
                        <div class="relative mb-12">
                            <img class="w-full rounded-md" src="https://cdn.rareblocks.xyz/collection/celebration/images/content/1/team-work.jpg" alt="" />
                        </div>

                        <div>
                            <div class="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                                <svg class="w-8 h-8 text-orange-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h2 class="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">{name}</h2>
                            <p class="mt-6 text-lg leading-relaxed text-gray-600">{description}</p>
                            <a href="#" title="" class="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 rounded-md mt-9 bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80" role="button">{prix} Acheter </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}