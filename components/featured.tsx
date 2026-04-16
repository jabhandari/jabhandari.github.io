import featured from "@/data/featured.json"
import FeaturedCards from "./featuredCards";
export default function Featured(){
    return(
        <section className="mx-auto w-full max-w-6xl px-6 py-16">
            <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-[var(--accent-strong)]">Highlights</p>
                <h2 className="mt-2 text-3xl font-bold text-[var(--foreground)]"> 
                      Featured Projects</h2>
            </div>
            <div className="grid gap-6">
                {featured.map((feature,index)=>(
                    <FeaturedCards key={index} feature={feature} />
                ))}
            </div>
        </section>
    );
}